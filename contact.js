
document.addEventListener("DOMContentLoaded", function () {
    // Side NavBar
    const sideNav = document.getElementById("sideNav");
    const sideNavCloseBtn = document.getElementById("closeBtn")
    const sideNav_Icon = document.getElementById("nav-Icon")

    const sideNavBarOverlay = document.getElementById("sideNavBarOverlay");

    sideNav_Icon.addEventListener("click", function (event) {
        sideNav.style.left = "0"

        sideNavBarOverlay.classList.remove("hidden")
    })
    sideNavCloseBtn.addEventListener("click", function (event) {
        sideNav.style.left = "-50%"

        sideNavBarOverlay.classList.add("hidden");
    })

    sideNavBarOverlay.addEventListener("click", function () {
        sideNav.style.left = "-50%"

        sideNavBarOverlay.classList.add("hidden");
    })


    // Contact Form Validation

    const form = document.getElementById("contactForm");
    const fields = ["name", "email", "message"];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let isValid = true;

        fields.forEach((id) => {
            const input = document.getElementById(id)
            const value = input.value.trim();

            if (!value) {
                input.classList.add("border", "border-red-500", "placeholder-red-500")
                isValid = false;
            } else {
                input.classList.remove("border", "border-red-500")
            }
        })

        if (!isValid) {
            alert("Please fill in all the required fields before submitting.");
            return;
        }
        alert("Thanks for Contacting Us!");
        
        form.reset()
    })

    // Remove Red Border on input

    fields.forEach((id) => {
        const input = document.getElementById(id);
        input.addEventListener("input", () => {
            if (input.value.trim()) {
                input.classList.remove("border", "border-red-500")
            }
        })
    })
});

