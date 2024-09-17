import { openModal, closeModal } from './modal.js';

const tips = () => {
    const modalToggleOnceAll = document.querySelectorAll("[data-modal-once]");

    function handleToggleClick(e) {
        const modalID = this.getAttribute("data-modal-once");
        const modal = document.getElementById(modalID);
        const modalVisible = document.querySelector(".modal.is-visible");
        const tipsToggleAll = document.querySelectorAll(`[data-modal-once="${modalID}"]`);

        e.preventDefault();

        if (modalVisible) {
            modalVisible.classList.remove('is-visible');

            setTimeout(() => {
                openModal(modal);
            }, 250);
        } else {
            openModal(modal);
        }

        if (tipsToggleAll.length > 1) {
            tipsToggleAll.forEach(item => {
                item.removeEventListener('click', handleToggleClick);
            });
        }

        if (modalID === 'modal-tip-7') {
            const tipsToggle = document.querySelector(`[data-modal-once="${modalID}"]`);
            const logo = document.querySelector('.logo__link');

            tipsToggle?.setAttribute('data-modal-once', 'modal-tip-14');
            tipsToggle?.addEventListener('click', handleToggleClick, { once: true });

            logo?.setAttribute('data-modal-once', 'modal-tip-14');
            logo?.addEventListener('click', handleToggleClick, { once: true });
        }

        if (modalID === 'modal-tip-3') {
            const filterHideButton = document.querySelector('.filter__hide-button');

            filterHideButton?.setAttribute('data-modal-once', 'modal-tip-12');
            filterHideButton?.addEventListener('click', handleToggleClick, { once: true });
        }   
    }

    modalToggleOnceAll.forEach(item => {
        const modalID = item.getAttribute("data-modal-once");
        const modal = document.getElementById(modalID);

        if (modal) {
            item.addEventListener('click', handleToggleClick, { once: true });
        }
    });

    const firstModal = document.getElementById('modal-tip-1');

    if (firstModal) {
        openModal(firstModal);
    }

}

export default tips;
