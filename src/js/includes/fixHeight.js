const fixHeight = () => {
    const changeHeight = () => {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    changeHeight();
    
    window.addEventListener('resize', () => {
        changeHeight();
    });

    function updateSidebarWidthVar() {
        const filterEl = document.querySelector('.filter');
        const width = filterEl?.offsetWidth + "px";
        document.documentElement.style.setProperty('--filter-width', width);
      }
      
      // Викликати при завантаженні
      updateSidebarWidthVar();
      
      // Слухач для динамічного resize
      const resizeObserver = new ResizeObserver(updateSidebarWidthVar);
      resizeObserver.observe(document.querySelector('.filter'));
}

export default fixHeight;
