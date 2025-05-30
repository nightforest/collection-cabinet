import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

const tooltips = () => {
    tippy('[data-tippy]', {
        content(reference) {
          const id = reference.getAttribute('data-tippy');
          const template = document.getElementById(id);
          return `<div class="tooltip">${template?.innerHTML}</div>`;
        },
        allowHTML: true,
        theme: 'light',
        placement: 'top',
        interactive: false,
    });
}

export default tooltips;

