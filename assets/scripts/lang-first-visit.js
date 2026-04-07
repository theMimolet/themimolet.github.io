let firstVisit = localStorage.getItem("is_first_visit");

if (firstVisit === null) {
    firstVisit = true;
} else {
    firstVisit = false;
}

function getUserLanguage() {
    const preferredLanguage = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
    return preferredLanguage.toLowerCase().split("-")[0];
}

function toFrenchPath(pathname) {
    if (pathname === "/fr" || pathname.startsWith("/fr/")) {
        return pathname;
    }

    return pathname === "/" ? "/fr/" : `/fr${pathname}`;
}

document.addEventListener("DOMContentLoaded", () => {

    // First visit only: no auto redirect once a language choice has been stored.
    if (!firstVisit) {
        return;
    }

    localStorage.setItem("is_first_visit", false);

    const userLanguage = getUserLanguage();

    if (userLanguage === "fr") {
        const pathname = window.location.pathname;
        const targetPath = toFrenchPath(pathname);

        if (targetPath !== pathname) {
            window.location.replace(`${targetPath}${window.location.search}${window.location.hash}`);
        }
    }
});

