(function () {

    /* =========================
       CONFIG
    ========================= */
    const SHEET_URL =
        "https://script.google.com/macros/s/AKfycbx1f17Rfn9rqHD8wXqVNi3OQQMp3ihztTt7QyRPi6UcaurXHkWT4gj3Ad0h_IyrLeP0/exec";

    /* =========================
       ELEMENTS
    ========================= */
    const overlay = document.getElementById("omgcpOverlay");
    const form = document.getElementById("omgcpForm");
    const closeBtn = overlay?.querySelector(".omgcp-close");
    const serviceSelect = form?.querySelector('select[name="service"]');
    const genderInputs = form?.querySelectorAll('input[name="gender"]');

    if (!overlay || !form || !serviceSelect || !genderInputs) return;

    const submitBtn = form.querySelector(".omgcp-submit");
    const serviceOptions = Array.from(serviceSelect.options);

    /* =========================
       SCROLL CONTROL
    ========================= */
    function lockScroll() {
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }

    function unlockScroll() {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
    }

    /* =========================
       POPUP CONTROL
    ========================= */
    function openPopup() {
        overlay.style.display = "flex";
        lockScroll();
    }

    function closePopup() {
        overlay.style.display = "none";
        unlockScroll();
    }

    // Expose manual trigger
    window.openClinicPopup = openPopup;

    /* =========================
       CLOSE ACTIONS
    ========================= */
    closeBtn?.addEventListener("click", closePopup);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closePopup();
    });

    /* =========================
       GENDER → SERVICE FILTER
    ========================= */
    function filterServicesByGender(gender) {
        serviceSelect.value = "";

        serviceOptions.forEach(option => {

            if (!option.value) {
                option.hidden = false; // "Select Service *"
                return;
            }

            const allowedGender = option.dataset.gender;

            if (allowedGender === "both") {
                option.hidden = false;
            } else {
                option.hidden = allowedGender !== gender.toLowerCase();
            }
        });
    }

    // Default state → Men
    filterServicesByGender("Men");

    genderInputs.forEach(input => {
        input.addEventListener("change", () => {
            filterServicesByGender(input.value);
        });
    });

    /* =========================
       SERVICE CARD → POPUP
    ========================= */
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".omg-ms-btn");
        if (!btn) return;

        const serviceId = btn.getAttribute("data-service");
        if (!serviceId) return;

        openPopup();

        setTimeout(() => {

            // 1️⃣ Detect gender from service ID
            const isWomen = serviceId.startsWith("women");
            const genderValue = isWomen ? "Women" : "Men";

            // 2️⃣ Switch gender first (important)
            const genderRadio = document.querySelector(
                `input[name="gender"][value="${genderValue}"]`
            );
            genderRadio?.click();

            // 3️⃣ Select correct service using data-service
            serviceOptions.forEach(option => {
                option.selected = option.dataset.service === serviceId;
            });

        }, 80);
    });

    /* =========================
       FORM SUBMIT → GOOGLE SHEET
    ========================= */
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (submitBtn.disabled) return;

        submitBtn.innerText = "Submitting...";
        submitBtn.disabled = true;

        const formData = new FormData(form);

        fetch(SHEET_URL, {
            method: "POST",
            body: formData
        })
            .then(res => res.text())
            .then(res => {
                if (res === "success") {
                    submitBtn.innerText = "Submitted ✓";
                    form.reset();

                    setTimeout(() => {
                        submitBtn.innerText = "Book Appointment";
                        submitBtn.disabled = false;
                        closePopup();
                    }, 1500);
                } else {
                    throw new Error("Submission failed");
                }
            })
            .catch(err => {
                console.error("Google Sheet Error:", err);
                alert("Something went wrong. Please try again.");
                submitBtn.innerText = "Book Appointment";
                submitBtn.disabled = false;
            });
    });

})();
