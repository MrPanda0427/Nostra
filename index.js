const offerBar = document.getElementById("sign-Up-Offer-Bar");
const OfferBarcloseBtn = document.getElementById("close-offer-bar");

const navbar = document.getElementById("navbar")
const recommended_banner = document.getElementById("recommended-banner")


OfferBarcloseBtn.addEventListener('click', function () {
    offerBar.style.display = 'none';
    navbar.classList.add("fixed", "top-0", "w-full", "shadow-md", "z-40");
    recommended_banner.classList.add("mt-20")
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
                recommended_banner.classList.add("mt-20");
            } else {
                navbar.classList.remove("fixed", "top-0", "w-full", "shadow-md", "z-40");
                recommended_banner.classList.remove("mt-20");
            }
        });
    },
    { root: null, threshold: 0 }
);

observer.observe(offerBar);


// Image Movement 

const sliderContainer = document.getElementById('slider-container');
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalImages = sliderContainer.children.length;

function updateSlide() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
});





