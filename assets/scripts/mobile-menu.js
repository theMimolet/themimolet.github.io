document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("mobile-menu-toggle");
    const closeButton = document.getElementById("mobile-menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-menu-link, #language-switcher-mobile");

    if (!toggle || !closeButton || !mobileMenu) {
        return;
    }

    function interactMenu(action) {
        if (action === "open") {
            openMenu();
        } else if (action === "close") {
            closeMenu();
        }
    }

    function openMenu() {
        mobileMenu.hidden = false;
        mobileMenu.classList.add("open");
        document.body.classList.add("mobile-menu-open");
        toggle.setAttribute("aria-expanded", "true");
    }

    function closeMenu() {
        mobileMenu.classList.remove("open");
        mobileMenu.hidden = true;
        document.body.classList.remove("mobile-menu-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
        interactMenu(mobileMenu.classList.contains("open") ? "close" : "open");
    });

    closeButton.addEventListener("click", () => {
        interactMenu("close");
    });

    mobileMenu.addEventListener("click", (event) => {
        if (event.target === mobileMenu) {
            closeMenu();
        }
    });

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            interactMenu("close");
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
            interactMenu("close");
        }
    });
});
