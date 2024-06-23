document.addEventListener('DOMContentLoaded', () => {
    // Theme toggling
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        toggleButton.setAttribute('aria-pressed', currentTheme === 'dark');
    }

    toggleButton.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        toggleButton.setAttribute('aria-pressed', theme === 'dark');
    });

    // Carousel functionality
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
        document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();

    // Dropdown menu functionality
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('open');
    });

    let menuList = document.getElementById("menuList");
    menuList.style.maxHeight = "0px";

    function toggleMenu() {
        let menuIcon = document.getElementById("menuIcon");
        if(menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "300px";
            menuIcon.classList.remove("ri-menu-line");
            menuIcon.classList.add("ri-arrow-down-double-line");
        } else {
            menuList.style.maxHeight = "0px";
            menuIcon.classList.remove("ri-arrow-down-double-line");
            menuIcon.classList.add("ri-menu-line");
        }
    }
});