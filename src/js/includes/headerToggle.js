const headerToggle = () => {
    const headerToggleButton = document.querySelectorAll('[data-header-toggle]');
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');

    headerToggleButton?.forEach(button => {
        button.addEventListener('click', () => {
            header?.classList.toggle('is-visible');
            main?.classList.toggle('is-header-visible');
        });
    });

    function scrollDetect() {
        if (window.innerWidth < 768) {
            if ( window.scrollY > 0 ) {
                header?.classList.remove('is-visible');
                main?.classList.remove('is-header-visible');
            } else {
                header?.classList.add('is-visible');
                main?.classList.add('is-header-visible');
            }
        }
    }

    window.addEventListener('load', () => {
        scrollDetect();

        window.addEventListener('scroll', function() {
            if(!document.body.classList.contains('scroll-disabled')) {
                scrollDetect();
            }
        });
    });
}

export default headerToggle;
