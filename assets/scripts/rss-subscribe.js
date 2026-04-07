document.addEventListener("DOMContentLoaded", () => {
    const copyButtons = document.querySelectorAll("[data-copy-rss]");

    copyButtons.forEach((button) => {
        button.addEventListener("click", async () => {
            const feedUrl = button.getAttribute("data-feed-url");
            const defaultLabel = button.getAttribute("data-default-label") || "Copy feed URL";
            const copiedLabel = button.getAttribute("data-copied-label") || "Copied!";

            if (!feedUrl) {
                return;
            }

            try {
                await navigator.clipboard.writeText(feedUrl);
                button.textContent = copiedLabel;
                button.disabled = true;

                window.setTimeout(() => {
                    button.textContent = defaultLabel;
                    button.disabled = false;
                }, 1400);
            } catch (_error) {
                window.prompt("Copy this RSS URL:", feedUrl);
            }
        });
    });
});
