import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import fs from "node:fs";
import path from "node:path";
import * as yaml from "js-yaml";

const readYaml = (filePath) => yaml.load(fs.readFileSync(path.resolve(filePath), "utf8"));

export const config = {
    dir: {
        input: ".",
        output: "_site",
        includes: "_includes",
        layouts: "_layouts",
	},
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
};

export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addGlobalData("home", readYaml("_data/home.yml"));
	eleventyConfig.addGlobalData("i18n", {
		en: readYaml("_data/i18n/en.yml"),
		fr: readYaml("_data/i18n/fr.yml"),
	});

	eleventyConfig.addFilter("localizedDate", (date, language = "en") => {
		return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
			timeZone: "Europe/Paris",
		}).format(date);
	});

	eleventyConfig.addCollection("posts", (collectionApi) => {
		return collectionApi.getFilteredByGlob(["./_posts/**/*.md", "./fr/_posts/**/*.md"]);
	});

	eleventyConfig.addCollection("englishPosts", (collectionApi) => {
		return collectionApi.getFilteredByGlob("./_posts/**/*.md").filter((post) => post.data.lang === "en");
	});

	eleventyConfig.addCollection("frenchPosts", (collectionApi) => {
		return collectionApi.getFilteredByGlob("./fr/_posts/**/*.md").filter((post) => post.data.lang === "fr");
	});

	eleventyConfig.addGlobalData("site", {
		title: "Mimolet",
		url: "https://themimolet.github.io",
		description: "Website of Mimolet, a student in software engineering and indie creation.",
		styles_path: "/assets/styles",
		images_path: "/assets/images",
		icons_path: "/assets/icons",
		scripts_path: "/assets/scripts",
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		collection: {
			name: "englishPosts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Mimolet's blog",
			subtitle: "Mimolet's blog, a place where I share my thoughts and experiences.",
			base: "https://themimolet.github.io/",
			author: {
				name: "Mimolet",
				email: "themimolet@proton.me",
			}
		}
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/fr/feed.xml",
		collection: {
			name: "frenchPosts",
			limit: 10,
		},
		metadata: {
			language: "fr",
			title: "Le blog de Mimolet",
			subtitle: "Le blog de Mimolet, où je partage mes pensées et expériences.",
			base: "https://themimolet.github.io/fr/",
			author: {
				name: "Mimolet",
				email: "themimolet@proton.me",
			}
		}
	});
};
