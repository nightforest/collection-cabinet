import fixHeight from "./fixHeight";
import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const filter = () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const filterNav = document.querySelector(".filter");
    const filterNavToggleAll = document.querySelectorAll("[data-filter-toggle]");
    const filterNavHide = document.querySelector("[data-filter-hide]");

    filterNavToggleAll?.forEach(item => {
        item?.addEventListener('click', e => {
            e.preventDefault();
            filterNavShowHide();
        });
    });

    filterNav?.addEventListener('click', e => {
        if (!e.target.closest('.filter__panel')) {
            filterNavShowHide();
        }
    });

    filterNavHide?.addEventListener('click', () => {
        filterNav?.classList.toggle('is-hide');
        header?.classList.toggle('is-full');
        main?.classList.toggle('is-full');

        fixHeight();
    });

    const filterShowHide = () => {
        if (window.innerWidth < 1170) {
            filterNav?.classList.add('is-hide');
            header?.classList.add('is-full');
            main?.classList.add('is-full');
        } else {
            // filterNav?.classList.remove('is-hide');
            // header?.classList.remove('is-full');
            // main?.classList.remove('is-full');
        } 
    }

    filterShowHide();

    if (window.attachEvent) {
        window.attachEvent('onresize', function() {
            filterShowHide();
        });
    } else if (window.addEventListener) {
        window.addEventListener('resize', function() {
            filterShowHide();
        }, true);
    }

    function filterNavShowHide() {
        header?.classList.toggle('is-active');
        filterNav?.classList.toggle('is-visible');

        filterNavToggleAll?.forEach(item => {
            item?.classList.toggle('is-active');
        });

        if (filterNav.classList.contains('is-visible')) {
            disableScroll();
        } else {
            setTimeout(() => {
                enableScroll();
            }, 500);
        }
    }
}

export default filter;
