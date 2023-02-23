/* navbar */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", (e) => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

/** active page */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash != "") { 
        navToggler.classList.add("hide");
        const hash = e.target.hash;
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.add("hide");
        }, 500);
    }
});


/* About tabs */
const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !(e.target.classList.contains("active"))) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        const target = e.target.getAttribute("data-target");
        const t = aboutSection.querySelector(".tab-content.active").classList;
        t.remove("active");
        aboutSection.querySelector(target).classList.add("active");
   } 
});

/** Portfolio item details popup */
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    } 
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) =>{
    if (e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    } 
});

function portfolioItemDetails(portfolioItem) {
    document.querySelector("#p-body").src = portfolioItem.querySelector("#i-image").src;
    document.querySelector("#p-title").innerHTML = portfolioItem.querySelector("#i-title").innerHTML;
    document.querySelector("#p-body").innerHTML = portfolioItem.querySelector("#i-body").innerHTML;
}

/*  Pre Loader  */

setTimeout(() => {
    const box = document.getElementById("banner");
    const content = document.getElementById("body");

    content.style.display = 'block';
    box.style.display = 'none';
}, 1000); 
  
setTimeout(() => {
    const content = document.getElementById("body");
    const box = document.getElementById("banner");

    box.style.display = 'block';
    content.style.display = 'none';
}, 0);
