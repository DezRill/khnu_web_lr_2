document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header-burger');
    const menu = document.querySelector('.mobile-menu');
    const header = document.querySelector('header');

    burger.addEventListener('click', function () {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });

    document.addEventListener('scroll', function(e) {
        if (window.scrollY === 0) {
            header.style.padding = '20px 0';
        } else {
            header.style.padding = '0';
        }
    });
});