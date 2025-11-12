import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import MarkdownIt from 'markdown-it';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const md = new MarkdownIt({ html: true });

// Configuration - MODIFIE CES VALEURS
const CONFIG = {
    siteUrl: 'https://themimolet.github.io',
    title: 'the mimolet updates.',
    description: 'recent news and updates from mimo.',
    author: 'Mimolet',
    language: 'en',
    imageUrl: 'https://themimolet.github.io/assets/images/mimo-pfp.png'
};

// Fonction pour parser une date simplifiée
function parseSimpleDate(dateStr) {
    // Format: "YYYY-MM-DD HH:mm" ou "YYYY-MM-DD"
    const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2})$/;
    const dateOnlyRegex = /^(\d{4})-(\d{2})-(\d{2})$/;

    let match = dateStr.match(dateTimeRegex);
    if (match) {
        const [, year, month, day, hour, minute] = match;
        return new Date(year, month - 1, day, hour, minute);
    }

    match = dateStr.match(dateOnlyRegex);
    if (match) {
        const [, year, month, day] = match;
        return new Date(year, month - 1, day, 12, 0); // Midi par défaut
    }

    throw new Error(`Format de date invalide: ${dateStr}. Utilise "YYYY-MM-DD HH:mm" ou "YYYY-MM-DD"`);
}

// Fonction pour extraire le frontmatter et le contenu
function parseMarkdown(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (!match) {
        throw new Error('Pas de frontmatter trouvé');
    }

    const frontmatter = yaml.load(match[1]);

    // Parser la date avec le format simplifié
    if (frontmatter.date) {
        frontmatter.date = parseSimpleDate(frontmatter.date);
    }

    const markdown = match[2];
    const html = md.render(markdown);

    return { frontmatter, html };
}

// Fonction pour formater la date en RFC 822
function formatRFC822(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const d = new Date(date);
    const day = days[d.getDay()];
    const date_ = d.getDate().toString().padStart(2, '0');
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    const hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const seconds = d.getSeconds().toString().padStart(2, '0');

    return `${day}, ${date_} ${month} ${year} ${hours}:${minutes}:${seconds} +0200`;
}

// Fonction pour générer le RSS
function generateRSS(posts) {
    const items = posts.map(post => {
        const { frontmatter, html } = post;
        const slug = path.basename(post.filename, '.md');

        return `
        <item>
            <title>${frontmatter.title}</title>
            <author>${CONFIG.author}</author>
            <guid isPermaLink="false">${CONFIG.siteUrl}/posts/${slug}.html</guid>
            <link>${CONFIG.siteUrl}/posts/${slug}.html</link>
            <pubDate>${formatRFC822(frontmatter.date)}</pubDate>
            <description>
                <![CDATA[
                ${html}
                ]]>
            </description>
        </item>`;
    }).join('\n');

    const lastBuildDate = formatRFC822(new Date());

    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
    xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${CONFIG.title}</title>
        <link>${CONFIG.siteUrl}</link>
        <atom:link href="${CONFIG.siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
        <description>${CONFIG.description}</description>
        <language>${CONFIG.language}</language>
        <category>News</category>
        <ttl>60</ttl>
        <copyright>© ${new Date().getFullYear()} Mimolet. All rights reserved.</copyright>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>

        <image>
            <url>${CONFIG.imageUrl}</url>
            <title>${CONFIG.title}</title>
            <link>${CONFIG.siteUrl}</link>
            <width>32</width>
            <height>32</height>
        </image>
${items}
    </channel>
</rss>`;
}

// Fonction pour générer une page HTML pour un post
function generatePostHTML(post) {
    const { frontmatter, html } = post;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${frontmatter.title} - Mimolet</title>
    <link rel="stylesheet" href="/assets/style/posts.css">
</head>
<body>
    <main>
        <h1>the mimolet updates.</h1>
        <div id="links">
            <a href="/" rel="noopener noreferrer">Home</a><br>
            <a href="/feed.xml" target="_blank" rel="noopener noreferrer">Subscribe (RSS)</a>
        </div>
        <article class="feed-item">
            <h1>${frontmatter.title}</h1>
            <p class="post-meta">
                <time datetime="${frontmatter.date}">${new Date(frontmatter.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}</time>
            </p>
            ${html}
        </article>
    </main>
</body>
</html>`;
}

// Fonction principale
function main() {
    const markdownDir = path.join(__dirname, '../../posts/md');
    const outputDir = path.join(__dirname, '../../posts');

    // Créer le dossier posts s'il n'existe pas
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Lire tous les fichiers markdown
    const files = fs.readdirSync(markdownDir)
        .filter(file => file.endsWith('.md'))
        .sort()
        .reverse(); // Les plus récents en premier

    // Parser tous les posts
    const posts = files.map(file => {
        const content = fs.readFileSync(path.join(markdownDir, file), 'utf-8');
        const parsed = parseMarkdown(content);
        return { ...parsed, filename: file };
    });

    // Générer le RSS
    const rss = generateRSS(posts);
    try {
        fs.writeFileSync(path.join(__dirname, '../../feed.xml'), rss);
    } catch (e) {
        print.error(e.message)
    } finally {
        console.log('✅ feed.xml généré');
    }

    // Générer les pages HTML individuelles
    posts.forEach(post => {
        const slug = path.basename(post.filename, '.md');
        const html = generatePostHTML(post);
        fs.writeFileSync(path.join(outputDir, `${slug}.html`), html);
        console.log(`✅ ${slug}.html généré`);
    });

    console.log(`\n🎉 ${posts.length} posts générés avec succès !`);
}

main();