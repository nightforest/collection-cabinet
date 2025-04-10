const recommendedCheckbox = () => {
    const recommendedCheckboxAll = document.querySelectorAll('.checkbox--light .checkbox__input');

    recommendedCheckboxAll.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
          if (!this.checked) {
            this.closest('.checkbox').classList.remove('checkbox--light');
          }
        });
    });
}

export default recommendedCheckbox;
