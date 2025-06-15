import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const sidebar = () => {
    const header = document.querySelector('.header');
    const mobileNav = document.querySelector(".sidebar");
    const mobileNavToggleAll = document.querySelectorAll("[data-sidebar-toggle]");

    mobileNavToggleAll?.forEach(item => {
        item?.addEventListener('click', () => {
            // e.preventDefault();
            mobileNavShowHide();
        });
    });

    mobileNav?.addEventListener('click', e => {
        if (!e.target.closest('.sidebar__panel')) {
            mobileNavShowHide();
        }
    });

    function mobileNavShowHide() {
        header?.classList.toggle('is-active');
        mobileNav?.classList.toggle('is-visible');

        mobileNavToggleAll?.forEach(item => {
            item?.classList.toggle('is-active');
        });

        if (mobileNav.classList.contains('is-visible')) {
            disableScroll();
        } else {
            setTimeout(() => {
                enableScroll();
            }, 500);
        }
    }
}

export default sidebar;