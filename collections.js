const offerBar = document.getElementById("sign-Up-Offer-Bar");
const offerBarcloseBtn = document.getElementById("close-offer-bar");

const navbar = document.getElementById("navbar")
const productCollections = document.getElementById("productCollections")

offerBarcloseBtn.addEventListener('click', function () {
    offerBar.style.display = 'none';
    navbar.classList.add("fixed", "top-0", "w-full", "shadow-md", "z-50");
    // Add spacing to collections
    productCollections.classList.add("mt-20");

    // Log to confirm
    console.log("New class list on #productCollections:", productCollections.className);
});

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

sideNavBarOverlay.addEventListener("click", function(){
    sideNav.style.left = "-50%"

    sideNavBarOverlay.classList.add("hidden");
})

// Intersection Observer to fix navbar when offer bar scrolls out
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                navbar.classList.add("fixed", "top-0", "w-full", "shadow-md", "z-40");
                productCollections.classList.add("mt-20")

            } else {
                navbar.classList.remove("fixed", "top-0", "w-full", "shadow-md", "z-40");
                productCollections.classList.remove("mt-20");

            }
        });
    },
    { root: null, threshold: 0 }
);

observer.observe(offerBar);

// fillter logic
const allCheckBoxs = document.querySelectorAll('input[type="checkbox"]');
const productCards = document.querySelectorAll('#productContainer > div');

let selectedCategories = [];

allCheckBoxs.forEach((checkbox) => {
    checkbox.addEventListener("change", function (event) {
        const value = event.target.value.toLowerCase();

        // Add or remove from selected categories
        if (event.target.checked) {
            if (!selectedCategories.includes(value)) {
                selectedCategories.push(value);
            }
        } else {
            const index = selectedCategories.indexOf(value);
            if (index > -1) {
                selectedCategories.splice(index, 1);
            }
        }

        // Loop through all cards and filter
        productCards.forEach((card) => {
            const tags = (card.dataset.tags || "").toLowerCase().split(" ");
            const show = selectedCategories.length === 0 || selectedCategories.every(f => tags.includes(f));
            card.style.display = show ? 'block' : 'none';
        });
    });
});
