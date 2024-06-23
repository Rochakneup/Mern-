document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const openItem = document.querySelector('.accordion-item.active');

        if (openItem && openItem !== accordionItem) {
            openItem.classList.toggle('active');
        }

        accordionItem.classList.toggle('active');
    });
});


document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
});