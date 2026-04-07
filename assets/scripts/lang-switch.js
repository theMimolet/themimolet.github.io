document.addEventListener("DOMContentLoaded", () => {
    const switchers = document.querySelectorAll("[data-language-switcher]");

    if (!switchers.length) {
        return;
    }

    const targetUrl = switchers[0].href;

    fetch(targetUrl, { method: "HEAD" })
        .then((response) => {
            switchers.forEach((switcher) => {
                if (response.ok) {
                    switcher.style.display = "inline-block";
                } else {
                    switcher.style.display = "none";
                    console.warn(`The target URL ${targetUrl} does not exist. The language button will remain hidden.`);
                }
            });
        })
        .catch(() => {
            switchers.forEach((switcher) => {
                switcher.style.display = "none";
            });
        });
});
