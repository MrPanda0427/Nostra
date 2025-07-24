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

sideNav_Icon.addEventListener("click", function (event) {
    sideNav.style.left = "0"
})
sideNavCloseBtn.addEventListener("click", function (event) {
    sideNav.style.left = "-50%"
})

cons

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

