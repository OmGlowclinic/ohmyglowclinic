const scriptURL = "https://script.google.com/macros/s/AKfycbxGgXbBPGOaSD3vNrbO-pIfaB67cs_2-vlKVezrkdtTR5ct7T_njj19QCLyChr2XIRP/exec";

const form = document.getElementById("appointmentForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = submitBtn.querySelector(".btn-text");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🔄 Start loading state
    submitBtn.classList.add("loading");
    btnText.textContent = "Submitting...";

    const formData = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: form.subject.value,
        date: form.date.value
    };

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                // ✅ Submitted state
                btnText.textContent = "Submitted ✓";

                setTimeout(() => {
                    form.reset();
                    btnText.textContent = "Make Appointment";
                    submitBtn.classList.remove("loading");
                }, 2000);
            } else {
                throw new Error("Submission failed");
            }
        })
        .catch(err => {
            console.error(err);
            alert("❌ Submission failed. Please try again.");
            btnText.textContent = "Make Appointment";
            submitBtn.classList.remove("loading");
        });
});
