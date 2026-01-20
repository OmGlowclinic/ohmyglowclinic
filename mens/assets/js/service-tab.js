/* ================= MEN SERVICES DATA ================= */

const services = [

    /* ================= SKIN ================= */
    {
        title: "Men – OMG 7 Signature MediFacials",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin1",
        desc: "Advanced doctor-designed medi-facials for instant glow and skin health."
    },
    {
        title: "Men – Acne & Acne Scar Treatment",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin2",
        desc: "Medical treatments to control acne and visibly reduce acne scars."
    },
    {
        title: "Men – Pigmentation Treatment",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin3",
        desc: "Targeted solutions for pigmentation, tanning, and uneven skin tone."
    },
    {
        title: "Men – Anti-Ageing Treatment",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin4",
        desc: "Clinically proven anti-ageing treatments to restore youthful skin."
    },
    {
        title: "Men – Injectables (Botox, Fillers, Threads)",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin5",
        desc: "Doctor-led injectable treatments for wrinkles, volume loss and lifting."
    },
    {
        title: "Men – Chemical Peels",
        cat: "skin",
        img: "https://picsum.photos/600/400?skin6",
        desc: "Medical-grade peels for brighter, smoother, clearer skin."
    },

    /* ================= BODY ================= */
    {
        title: "Men – Weight Loss Program",
        cat: "body",
        img: "https://picsum.photos/600/400?body1",
        desc: "Doctor-supervised weight loss programs for safe, sustainable results.",
        // featured: true
    },
    {
        title: "Men – Inch Loss Program",
        cat: "body",
        img: "https://picsum.photos/600/400?body2",
        desc: "Targeted inch loss treatments for body shaping and contouring."
    },
    {
        title: "Men – Body Contouring",
        cat: "body",
        img: "https://picsum.photos/600/400?body3",
        desc: "Non-surgical body contouring to sculpt and define your physique."
    },
    {
        title: "Men – Spot Fat Reduction",
        cat: "body",
        img: "https://picsum.photos/600/400?body4",
        desc: "Advanced treatments to reduce stubborn fat from specific areas."
    },

    /* ================= HAIR ================= */
    {
        title: "Men – Hair Fall Treatment",
        cat: "hair",
        img: "https://picsum.photos/600/400?hair1",
        desc: "Medical solutions to control hair fall and strengthen hair roots."
    },
    {
        title: "Men – Hair Thinning Treatment",
        cat: "hair",
        img: "https://picsum.photos/600/400?hair2",
        desc: "Treatments designed to improve hair density and thickness."
    },
    {
        title: "Men – Hair Revital Boost",
        cat: "hair",
        img: "https://picsum.photos/600/400?hair3",
        desc: "Advanced therapies to revive weak, dull and damaged hair."
    },
    {
        title: "Men – GFC / PRP Hair Treatment",
        cat: "hair",
        img: "https://picsum.photos/600/400?hair4",
        desc: "Platelet-based hair regrowth therapy for visible results.",
        // featured: true
    },

    /* ================= PMU ================= */
    {
        title: "Men – Beard Shaping (PMU)",
        cat: "pmu",
        img: "https://picsum.photos/600/400?pmu1",
        desc: "Permanent beard shaping for fuller, well-defined beard lines."
    },
    {
        title: "Men – Lip Tint",
        cat: "pmu",
        img: "https://picsum.photos/600/400?pmu2",
        desc: "Natural-looking lip pigmentation for improved tone and colour."
    },
    {
        title: "Men – Scalp Micropigmentation",
        cat: "pmu",
        img: "https://picsum.photos/600/400?pmu3",
        desc: "Creates the appearance of fuller hair using micro-pigmentation."
    },

    /* ================= LASER HAIR REDUCTION ================= */
    {
        title: "Men – Beard Shaping Laser",
        cat: "laser",
        img: "https://picsum.photos/600/400?laser1",
        desc: "Precision laser treatment for sharp and defined beard lines."
    },
    {
        title: "Men – Chest Laser Hair Reduction",
        cat: "laser",
        img: "https://picsum.photos/600/400?laser2",
        desc: "Safe and effective laser hair reduction for chest area."
    },
    {
        title: "Men – Back & Shoulder Laser Hair Reduction",
        cat: "laser",
        img: "https://picsum.photos/600/400?laser3",
        desc: "Long-term laser hair reduction for back and shoulders."
    },
    {
        title: "Men – Full Body Laser Hair Reduction",
        cat: "laser",
        img: "https://picsum.photos/600/400?laser4",
        desc: "Advanced FDA-approved laser systems for full body hair reduction.",
        // featured: true
    },

    /* ================= OTHERS ================= */
    {
        title: "Men – IV Drips Therapy",
        cat: "other",
        img: "https://picsum.photos/600/400?other1",
        desc: "IV therapies for energy, immunity, skin and overall wellness."
    },
    {
        title: "Men – Body Brightening",
        cat: "other",
        img: "https://picsum.photos/600/400?other2",
        desc: "Medical body brightening treatments for even skin tone."
    },
    {
        title: "Men – Pre-Wedding Packages for Grooms",
        cat: "other",
        img: "https://picsum.photos/600/400?other3",
        desc: "Customized pre-wedding grooming packages for grooms."
    }

];

const grid = document.getElementById("serviceGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

let activeTab = "all";
const MIN_COUNT = 4;
const MAX_COUNT = 8;
let visibleCount = MIN_COUNT;

/* ================= RENDER ================= */

function renderServices() {
    grid.innerHTML = "";

    const filtered = services.filter(
        s => activeTab === "all" || s.cat === activeTab
    );

    const display = filtered.slice(0, visibleCount);

    display.forEach(s => {
        grid.innerHTML += `
          <div class="omg-ms-card ${s.featured ? "featured" : ""}">
            <img src="${s.img}">
            <div class="omg-ms-card-body">
              <div>
                <h4>${s.title.replace("Men – ", "")}</h4>
                <strong>Doctor-recommended treatment</strong>
                <p>${s.desc}</p>
              </div>
              <button 
                class="omg-ms-btn" 
                data-service="${s.title}">
                Consult Doctor
              </button>
            </div>
          </div>`;
    });

    /* BUTTON LOGIC (THE FIX) */
    if (filtered.length <= MIN_COUNT) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "inline-flex";
        loadMoreBtn.innerText =
            visibleCount === MAX_COUNT
                ? "Show Less "
                : "Show More ";
    }
}

/* ================= TABS ================= */

document.querySelectorAll(".omg-ms-tab").forEach(tab => {
    tab.onclick = () => {
        document.querySelectorAll(".omg-ms-tab")
            .forEach(t => t.classList.remove("active"));

        tab.classList.add("active");
        activeTab = tab.dataset.tab;

        visibleCount = MIN_COUNT;
        renderServices();
    };
});

/* ================= SHOW MORE / LESS ================= */

loadMoreBtn.onclick = () => {
    visibleCount =
        visibleCount === MAX_COUNT
            ? MIN_COUNT
            : MAX_COUNT;

    renderServices();
};

/* ================= SERVICE → POPUP ================= */

document.addEventListener("click", e => {
    const btn = e.target.closest(".omg-ms-btn");
    if (!btn) return;

    const service = btn.dataset.service;
    window.openClinicPopup?.();

    setTimeout(() => {
        const serviceSelect = document.getElementById("omgcpService");
        if (serviceSelect) serviceSelect.value = service;
    }, 80);
});

/* INIT */
renderServices();

/* ================= TAB SWITCHING ================= */
const tabs = document.querySelectorAll(".omg-ms-tab");
const mobileSelect = document.getElementById("mobileTabSelect");

function setActiveTab(tab) {
    tabs.forEach(t => t.classList.remove("active"));
    document.querySelector(`.omg-ms-tab[data-tab="${tab}"]`)?.classList.add("active");
    mobileSelect.value = tab;
    activeTab = tab;
    visibleCount = 4;
    renderServices();
}

/* Desktop tab click */
tabs.forEach(tab => {
    tab.onclick = () => setActiveTab(tab.dataset.tab);
});

/* Mobile dropdown change */
mobileSelect.onchange = () => {
    setActiveTab(mobileSelect.value);
};
