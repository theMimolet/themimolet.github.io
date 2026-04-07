document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".post-grid img, article img");

    images.forEach((img) => {
        if (img.closest("a")) {
            return;
        }

        const link = document.createElement("a");
        link.href = img.src;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
    });
});
