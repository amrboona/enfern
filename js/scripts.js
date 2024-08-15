// Start swiper Main Function
function swiperSlideMainFunction(swiperWrapper, slides, currentIndex, nextBtn, prevBtn) {
    function goToSlide(index) {
        swiperWrapper.style.transform = `translateX(${index * (100)}%)`;
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        goToSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(currentIndex);
    }
    document.querySelector(nextBtn).addEventListener('click', nextSlide);
    document.querySelector(prevBtn).addEventListener('click', prevSlide);
    goToSlide(currentIndex);
}
// End swiper Main Function


// Start Header
let categories = document.getElementById("categories");
let categoriesList = document.getElementById("categories-list");
categories.addEventListener("click", () => {
    categories.classList.toggle("open-categories-list");
    let selectedCategoryArrow = document.querySelector(".selected-category svg")
    if (categories.classList.contains("open-categories-list")) {
        categoriesList.style.height = `${categoriesList.scrollHeight}px`;
        selectedCategoryArrow.style.transform = `rotate(180deg)`;
    } else {
        categoriesList.style.height = `0px`;
        selectedCategoryArrow.style.transform = `rotate(0deg)`;
    }
})


let selectedCategoryText = document.getElementById("selected-category-text");
let categoriesListItems = document.querySelectorAll(".categories-list-item");
let headerInputSearch = document.querySelector(".header-input-search");
categoriesListItems.forEach((element) => {
    element.addEventListener("click", () => {
        selectedCategoryText.innerHTML = element.innerHTML;
        headerInputSearch.setAttribute("placeholder", `ابحث في ${element.innerHTML}...`)
    })
})


let searchArea = document.getElementById("search-area");
let searchAreaBox = document.getElementById("search-area-icon");
searchAreaBox.addEventListener("click", () => {
    searchAreaBox.classList.toggle("open-search-area");
    let searchAreaIcon = document.querySelector(".search-area-icon svg");
    if (searchAreaBox.classList.contains("open-search-area")) {
        searchAreaIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
        searchArea.style.right = `0`;
    } else {
        searchAreaIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
        searchArea.style.right = `-100%`;
    }
})


let menuIcon = document.getElementById("menu-icon");
let menuContent = document.getElementById("menu-content");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open-menu-content");
    if (menuIcon.classList.contains("open-menu-content")) {
        menuContent.style.height = `${menuContent.scrollHeight}px`;
    } else {
        menuContent.style.height = `0px`;
    }
})
// End Header


// Start Hero
swiperSlideMainFunction(
                        document.querySelector('.companies-swiper-wrapper'),
                        document.querySelectorAll('.companies-swiper-slide'),
                        0,
                        '.companies-next-button',
                        '.companies-prev-button',
                    )
// End Hero


// Start Companies
swiperSlideMainFunction(
                        document.querySelector('.hero-swiper-wrapper'),
                        document.querySelectorAll('.hero-swiper-slide'),
                        0,
                        '.hero-next-button',
                        '.hero-prev-button',
                    )
// End Companies


// Start Faqs
let faqsBox = document.querySelectorAll(".faqs-box");
faqsBox.forEach((item, index) => {
    let faqsBoxHead = item.querySelector(".faqs-box-head");
    faqsBoxHead.addEventListener("click", () => {
        item.classList.toggle("open");
        let faqsBoxText = item.querySelector(".faqs-box-text");
        if (item.classList.contains("open")) {
            faqsBoxText.style.height = `${faqsBoxText.scrollHeight}px`;
            item.querySelector("svg").style.transform = "rotate(225deg)";
        } else {
            faqsBoxText.style.height = `0`;
            item.querySelector("svg").style.transform = "rotate(0deg)";
        }
        removeOpen(index);
    })
})
function removeOpen(index) {
    faqsBox.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove("open");
            let faqsBoxText2 = item2.querySelector(".faqs-box-text");
            faqsBoxText2.style.height = "0px";
            item2.querySelector("svg").style.transform = "rotate(0deg)";
        }
    })
}
// End Faqs