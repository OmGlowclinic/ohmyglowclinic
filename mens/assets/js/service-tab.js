/* ================= MEN SERVICES DATA ================= */

const services = [

    /* ================= SKIN ================= */
    {
        id: "men-omg-7-medifacials",
        title: "Men – OMG 7 Signature MediFacials",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-1.jpg",
        desc: "Advanced doctor-designed medi-facials for instant glow and skin health."
    },
    {
        id: "men-acne-scar-treatment",
        title: "Men – Acne & Acne Scar Treatment",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-2.jpg",
        desc: "Medical treatments to control acne and visibly reduce acne scars."
    },
    {
        id: "men-pigmentation-treatment",
        title: "Men – Pigmentation Treatment",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-3.jpg",
        desc: "Targeted solutions for pigmentation, tanning, and uneven skin tone."
    },
    {
        id: "men-anti-ageing-treatment",
        title: "Men – Anti-Ageing Treatment",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-4.jpg",
        desc: "Clinically proven anti-ageing treatments to restore youthful skin."
    },
    {
        id: "men-injectables",
        title: "Men – Injectables (Botox, Fillers, Threads)",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-5.jpg",
        desc: "Doctor-led injectable treatments for wrinkles, volume loss and lifting."
    },
    {
        id: "men-chemical-peels",
        title: "Men – Chemical Peels",
        cat: "skin",
        img: "/mens/assets/img/service/sr-4-6.jpg",
        desc: "Medical-grade peels for brighter, smoother, clearer skin."
    },

    /* ================= BODY ================= */
    {
        id: "men-weight-loss",
        title: "Men – Weight Loss Program",
        cat: "body",
        img: "/mens/assets/img/service/sr-4-7.jpg",
        desc: "Doctor-supervised weight loss programs for safe, sustainable results."
    },
    {
        id: "men-inch-loss",
        title: "Men – Inch Loss Program",
        cat: "body",
        img: "/mens/assets/img/service/sr-4-8.jpg",
        desc: "Targeted inch loss treatments for body shaping and contouring."
    },
    {
        id: "men-body-contouring",
        title: "Men – Body Contouring",
        cat: "body",
        img: "/mens/assets/img/service/sr-4-9.jpg",
        desc: "Non-surgical body contouring to sculpt and define your physique."
    },
    {
        id: "men-spot-fat-reduction",
        title: "Men – Spot Fat Reduction",
        cat: "body",
        img: "/mens/assets/img/service/sr-4-10.jpg",
        desc: "Advanced treatments to reduce stubborn fat from specific areas."
    },

    /* ================= HAIR ================= */
    {
        id: "men-hair-fall-treatment",
        title: "Men – Hair Fall Treatment",
        cat: "hair",
        img: "/mens/assets/img/service/sr-4-11.jpg",
        desc: "Medical solutions to control hair fall and strengthen hair roots."
    },
    {
        id: "men-hair-thinning-treatment",
        title: "Men – Hair Thinning Treatment",
        cat: "hair",
        img: "/mens/assets/img/service/sr-4-13.jpg",
        desc: "Treatments designed to improve hair density and thickness."
    },
    {
        id: "men-hair-revital-boost",
        title: "Men – Hair Revital Boost",
        cat: "hair",
        img: "/mens/assets/img/service/sr-4-12.jpg",
        desc: "Advanced therapies to revive weak, dull and damaged hair."
    },
    {
        id: "men-gfc-prp-hair",
        title: "Men – GFC / PRP Hair Treatment",
        cat: "hair",
        img: "/mens/assets/img/service/sr-4-14.jpg",
        desc: "Platelet-based hair regrowth therapy for visible results."
    },

    /* ================= PMU ================= */
    {
        id: "men-pmu-beard-shaping",
        title: "Men – PMU Beard Shaping",
        cat: "pmu",
        img: "/mens/assets/img/service/sr-4-19.jpg",
        desc: "Permanent beard shaping for fuller, well-defined beard lines."
    },
    {
        id: "men-pmu-lip-tint",
        title: "Men – PMU Lip Tint",
        cat: "pmu",
        img: "/mens/assets/img/service/sr-4-21.jpeg",
        desc: "Natural-looking lip pigmentation for improved tone and colour."
    },
    {
        id: "men-scalp-micropigmentation",
        title: "Men – Scalp Micropigmentation",
        cat: "pmu",
        img: "/mens/assets/img/service/sr-4-20.jpg",
        desc: "Creates the appearance of fuller hair using micro-pigmentation."
    },

    /* ================= LASER ================= */
    {
        id: "men-beard-laser",
        title: "Men – Beard Shaping Laser",
        cat: "laser",
        img: "/mens/assets/img/service/sr-4-15.jpg",
        desc: "Precision laser treatment for sharp and defined beard lines."
    },
    {
        id: "men-chest-laser",
        title: "Men – Chest Laser Hair Reduction",
        cat: "laser",
        img: "/mens/assets/img/service/sr-4-16.jpg",
        desc: "Safe and effective laser hair reduction for chest area."
    },
    {
        id: "men-back-shoulder-laser",
        title: "Men – Back & Shoulder Laser Hair Reduction",
        cat: "laser",
        img: "/mens/assets/img/service/sr-4-17.jpg",
        desc: "Long-term laser hair reduction for back and shoulders."
    },
    {
        id: "men-full-body-laser",
        title: "Men – Full Body Laser Hair Reduction",
        cat: "laser",
        img: "/mens/assets/img/service/sr-4-18.jpg",
        desc: "Advanced FDA-approved laser systems for full body hair reduction."
    },

    /* ================= OTHERS ================= */
    {
        id: "men-iv-drips",
        title: "Men – IV Drips Therapy",
        cat: "other",
        img: "/mens/assets/img/service/sr-4-1.jpg",
        desc: "IV therapies for energy, immunity, skin and overall wellness."
    },
    {
        id: "men-body-brightening",
        title: "Men – Body Brightening",
        cat: "other",
        img: "/mens/assets/img/service/sr-4-1.jpg",
        desc: "Medical body brightening treatments for even skin tone."
    },
    {
        id: "men-prewedding-groom",
        title: "Men – Pre-Wedding Packages for Grooms",
        cat: "other",
        img: "/mens/assets/img/service/sr-4-1.jpg",
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
                data-service="${s.id}">
                Consult Doctor
              </button>
            </div>
          </div>`;
    });

    if (filtered.length <= MIN_COUNT) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "inline-flex";
        loadMoreBtn.innerText =
            visibleCount === MAX_COUNT ? "Show Less" : "Show More";
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
        visibleCount === MAX_COUNT ? MIN_COUNT : MAX_COUNT;
    renderServices();
};

/* ================= SERVICE → POPUP (FIXED) ================= */

document.addEventListener("click", e => {
    const btn = e.target.closest(".omg-ms-btn");
    if (!btn) return;

    const serviceId = btn.dataset.service;
    window.openClinicPopup?.();

    setTimeout(() => {
        const serviceSelect = document.getElementById("omgcpService");
        if (!serviceSelect) return;

        [...serviceSelect.options].forEach(opt => {
            opt.selected = opt.dataset.service === serviceId;
        });
    }, 80);
});

/* INIT */
renderServices();

/* ================= TAB SWITCHING ================= */

const tabs = document.querySelectorAll(".omg-ms-tab");
const mobileSelect = document.getElementById("mobileTabSelect");

function setActiveTab(tab) {
    tabs.forEach(t => t.classList.remove("active"));
    document.querySelector(`.omg-ms-tab[data-tab="${tab}"]`)
        ?.classList.add("active");

    mobileSelect.value = tab;
    activeTab = tab;
    visibleCount = MIN_COUNT;
    renderServices();
}

/* Desktop */
tabs.forEach(tab => {
    tab.onclick = () => setActiveTab(tab.dataset.tab);
});

/* Mobile */
mobileSelect.onchange = () => {
    setActiveTab(mobileSelect.value);
};
