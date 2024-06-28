document.addEventListener('DOMContentLoaded', () => {
    const bodyEl = document.querySelector('body');
    const menuBtn = document.querySelector('.section.topmenu .mobile a');
    const closeBtn = document.querySelector('.section.topmenu .close a');
    const topMenuEl = document.querySelector('.section.topmenu nav');
    const shadowEl = document.querySelector('.menu-shadow');
    const topMenuLinks = document.querySelectorAll('.section.topmenu nav a');

    if (menuBtn && closeBtn && bodyEl && topMenuEl && shadowEl && topMenuLinks){        
        menuBtn.addEventListener('click', menuOpen);
        closeBtn.addEventListener('click', menuClose);
        shadowEl.addEventListener('click', menuClose);
        topMenuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', menuCloseNoPrevent);
        });
    }
    function menuOpen(event) {
        event.preventDefault();
        event.stopPropagation();
        bodyEl.classList.add('menu-open');
        topMenuEl.classList.add('open');
    }
    function menuClose(event) {
        event.preventDefault();
        menuCloseNoPrevent(event);
    }
    function menuCloseNoPrevent(event) {
        event.stopPropagation();
        bodyEl.classList.remove('menu-open');
        topMenuEl.classList.remove('open');
    }
});