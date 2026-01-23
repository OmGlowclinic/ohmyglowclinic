(function () {

    /* =========================
       CONFIG
    ========================= */
    const SHEET_URL = "https://script.google.com/macros/s/AKfycbx1f17Rfn9rqHD8wXqVNi3OQQMp3ihztTt7QyRPi6UcaurXHkWT4gj3Ad0h_IyrLeP0/exec";

    /* =========================
       ELEMENTS
    ========================= */
    const overlay = document.getElementById("omgcpOverlay");
    const closeBtn = overlay?.querySelector(".omgcp-close");
    const form = document.getElementById("omgcpForm");
    const serviceSelect = document.querySelector('#omgcpForm select[name="service"]');
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

    // Manual trigger
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
            const value = option.value;

            if (!value) {
                option.hidden = false; // "Select Service"
                return;
            }

            if (value === "General Contact / Inquiry") {
                option.hidden = false; // Always visible
                return;
            }

            if (gender === "Men") {
                option.hidden = !value.startsWith("Men");
            } else if (gender === "Women") {
                option.hidden = !value.startsWith("Women");
            }
        });
    }

    // Default = Men
    filterServicesByGender("Men");

    genderInputs.forEach(input => {
        input.addEventListener("change", () => {
            filterServicesByGender(input.value);
        });
    });

    /* =========================
       SERVICE BUTTON → POPUP
    ========================= */
    document.addEventListener("click", function (e) {
        const btn = e.target.closest(".omg-ms-btn");
        if (!btn) return;

        const selectedService = btn.getAttribute("data-service");
        if (!selectedService) return;

        openPopup();

        // Auto-select service (and ensure correct gender list is visible)
        setTimeout(() => {
            serviceSelect.value = selectedService;

            if (selectedService.startsWith("Women")) {
                document.getElementById("gender-women")?.click();
            } else {
                document.getElementById("gender-men")?.click();
            }
        }, 50);
    });

    /* =========================
       FORM SUBMIT (GOOGLE SHEET)
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
