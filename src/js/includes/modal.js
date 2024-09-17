export const openModal = (modal) => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const modalWrap = document.querySelector(".modal-wrap");
    const paddingRight = window.innerWidth - document.documentElement.clientWidth;

    body.classList.add('scroll-disabled');
    body.style.paddingRight = paddingRight + 'px';
    header.style.paddingRight = paddingRight + 'px';
    modalWrap.classList.add('is-visible');
    modal.classList.add('is-visible');

    const video = modal.querySelector('#youtube-video');

    if (video) {
        video.src += '&autoplay=1';
    }
}

export const closeModal = (modal) => {
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const modalWrap = document.querySelector(".modal-wrap");

    modalWrap.classList.remove('is-visible');
    modal.classList.remove('is-visible');

    if (!header.classList.contains('is-active')) {
        setTimeout(() => {
            body.classList.remove('scroll-disabled');
            body.style.paddingRight = '0px';
            header.style.paddingRight = '0px';
        }, 500);
    }

    const video = modal.querySelector('#youtube-video');

    if (video) {
        video.src = video.src.replace('&autoplay=1', '');
    }
}

const modal = () => {
    const modalAll = document.querySelectorAll(".modal");
    const modalToggleAll = document.querySelectorAll("[data-modal]");
    const modalCloseAll = document.querySelectorAll("[data-modal-close]");

    function handleToggleClick(e) {
        const modalID = this.getAttribute("data-modal");
        const modal = document.getElementById(modalID);
        const modalVisible = document.querySelector(".modal.is-visible");

        e.preventDefault();

        if (modalVisible) {
            modalVisible.classList.remove('is-visible');

            setTimeout(() => {
                openModal(modal);
            }, 250);
        } else {
            openModal(modal);
        }
    }

    modalToggleAll.forEach(item => {
        const modalID = item.getAttribute("data-modal");
        const modal = document.getElementById(modalID);

        if (modal) {
            item.addEventListener('click', handleToggleClick);
        }
    });

    modalAll.forEach(item => {
        item.addEventListener('click', e => {
            if (!e.target.closest('.modal__window')) {
                closeModal(item);
            }
        });
    });

    modalCloseAll.forEach(item => {
        item.addEventListener('click', e => {
            closeModal(item.closest(".modal"));
        });
    });
}

export default modal;