import SmoothScroll from 'smooth-scroll/src/js/smooth-scroll/smooth-scroll';

const scrollToId = () => {
    if(document.querySelector('[data-scroll]')) {
        new SmoothScroll('[data-scroll]', { 
            speed: 500,
            speedAsDuration: false,
            offset: 0,
            updateURL: false,
        });
    }
    
}

export default scrollToId;