const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phoneRegex = /^\d{10}$/;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    let isValid = true;

    if (!nameRegex.test(name.value)) {
        document.querySelector(".nameError").classList.remove("hidden");
        isValid = false;
    } else {
        document.querySelector(".nameError").classList.add("hidden");
    }

    if (!emailRegex.test(email.value)) {
        document.querySelector(".emailError").classList.remove("hidden");
        isValid = false;
    } else {
        document.querySelector(".emailError").classList.add("hidden");
    }

    if (!phoneRegex.test(phone.value)) {
        document.querySelector(".phoneError").classList.remove("hidden");
        isValid = false;
    } else {
        document.querySelector(".phoneError").classList.add("hidden");
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});