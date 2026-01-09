document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");
    let loadedCount = 0;

    includes.forEach(el => {
        const file = el.getAttribute("data-include");

        fetch(file)
            .then(res => res.text())
            .then(html => {
                el.innerHTML = html;
                loadedCount++;

                // 🔥 After ALL includes loaded
                if (loadedCount === includes.length) {
                    initThemeMobileMenu();
                    loadFooterConditionally();
                }
            })
            .catch(err => console.error("Include error:", err));
    });
});

/* ==================================================
   RE-INITIALIZE THEME MOBILE MENU (CRITICAL FIX)
================================================== */
function initThemeMobileMenu() {
    if (window.jQuery && typeof jQuery.fn.vsmobilemenu === "function") {
        jQuery(".vs-menu-wrapper").vsmobilemenu();
        console.log("✅ vsmobilemenu initialized");
    } else {
        console.warn("❌ vsmobilemenu plugin not available");
    }
}

/* ==================================================
   FOOTER LOGIC (Home vs Other Pages) – ROOT SAFE
================================================== */
function loadFooterConditionally() {
    const footerContainer = document.getElementById("footer-placeholder");
    if (!footerContainer) return;

    // Detect current page name
    const page = window.location.pathname.split("/").pop();

    const isHome =
        page === "" ||
        page === "index.html";

    // 🔥 Always load from ROOT
    const footerFile = isHome
        ? "/footer.html"
        : "/footer-2.html";

    fetch(footerFile)
        .then(res => {
            if (!res.ok) throw new Error(res.status);
            return res.text();
        })
        .then(html => footerContainer.innerHTML = html)
        .catch(err => console.error("Footer load error:", err));
}



/* ==================================================
   THEME-CORRECT HEADER + FOOTER INTERACTIONS
   (Fallback + Safety)
================================================== */
document.addEventListener("click", function (e) {

    /* ========== MOBILE MENU TOGGLE ========== */
    if (e.target.closest(".vs-menu-toggle")) {
        document.body.classList.toggle("vs-body-visible");
        document.querySelector(".vs-menu-wrapper")?.classList.toggle("show");
    }

    /* ========== SIDE MENU OPEN ========== */
    if (e.target.closest(".sideMenuToggler")) {
        document.body.classList.add("vs-body-visible");
        document.querySelector(".sidemenu-wrapper")?.classList.add("show");
    }

    /* ========== SIDE MENU CLOSE ========== */
    if (e.target.closest(".sideMenuCls")) {
        document.body.classList.remove("vs-body-visible");
        document.querySelector(".sidemenu-wrapper")?.classList.remove("show");
    }

    /* ========== SEARCH OPEN ========== */
    if (e.target.closest(".searchBoxTggler")) {
        document.body.classList.add("vs-body-visible");
        document.querySelector(".popup-search-box")?.classList.add("show");
    }

    /* ========== SEARCH CLOSE ========== */
    if (e.target.closest(".searchClose")) {
        document.body.classList.remove("vs-body-visible");
        document.querySelector(".popup-search-box")?.classList.remove("show");
    }

    /* ========== MOBILE SUBMENU ========== */
    const submenu = e.target.closest(".menu-item-has-children > a");
    if (submenu && window.innerWidth < 992) {
        e.preventDefault();
        submenu.parentElement.classList.toggle("open");
    }
});

