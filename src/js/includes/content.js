const content = () => {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const mobileNav = document.querySelector(".content");
    const mobileNavToggleAll = document.querySelectorAll("[data-content-toggle]");
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;
    
    mobileNavToggleAll?.forEach(item => {
        item?.addEventListener('click', () => {
            // e.preventDefault();
            mobileNavShowHide();
        });
    });

    mobileNav?.addEventListener('click', e => {
        if (!e.target.closest('.content__panel')) {
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
            body.classList.add('scroll-disabled');
            body.style.paddingRight = paddingRight + 'px';
            header.style.paddingRight = paddingRight + 'px';
        } else {
            setTimeout(() => {
                body.classList.remove('scroll-disabled');
                body.style.paddingRight = '0px';
                header.style.paddingRight = '0px';
            }, 500);
        }
    }
}

export default content;