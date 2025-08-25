// Replace with your RSS feed URL
const rssUrl = 'https://themimolet.github.io/feed.xml';

fetch(rssUrl)
    .then(response => response.text())
    .then(xmlString => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const container = document.getElementById('feed-container');

        items.forEach(item => {
            const title = item.querySelector('title').textContent;
            const content = item.querySelector('description').textContent;
            const pubDate = item.querySelector('pubDate').textContent;

            const itemDiv = document.createElement('div');
            itemDiv.className = 'feed-item';

            const titleElement = document.createElement('h2');
            titleElement.textContent = title;
            titleElement.className = 'feed-title';

            const contentElement = document.createElement('p');
            contentElement.className = 'content';
            contentElement.innerHTML = content;

            const dateElement = document.createElement('p');
            dateElement.className = 'feed-date';
            dateElement.textContent = formatDate(pubDate);

            itemDiv.appendChild(titleElement);
            itemDiv.appendChild(contentElement);
            itemDiv.appendChild(dateElement);
            container.appendChild(itemDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching RSS feed:', error);
    });

// Format the date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}