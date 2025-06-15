import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

export const openModal = (modal) => {
    const modalWrap = document.querySelector(".modal-wrap");

    disableScroll();
    modalWrap.classList.add('is-visible');
    modal.classList.add('is-visible');

    const video = modal.querySelector('#youtube-video');

    if (video) {
        video.src += '&autoplay=1';
    }
}

export const closeModal = (modal) => {
    const header = document.querySelector(".header");
    const modalWrap = document.querySelector(".modal-wrap");

    modalWrap.classList.remove('is-visible');
    modal.classList.remove('is-visible');

    if (!header.classList.contains('is-active')) {
        // setTimeout(() => {
            enableScroll();
        // }, 500);
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