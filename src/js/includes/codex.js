import disableScroll from "./disableScroll";
import enableScroll from "./enableScroll";

const codex = () => {
    // const articles = {
    // "214-216": [
    //     { 
    //         title: "<span>214</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення.",
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення.",
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення.",
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення.",
    //     ] },
    //     { 
    //         title: "<span>215</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] },
    //     { 
    //         title: "<span>216</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] },
    // ],
    // "276": [
    //     { 
    //         title: "<span>276</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] }
    // ],
    // "277": [
    //     { 
    //         title: "<span>277</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] }
    // ],
    // "278": [
    //     { 
    //         title: "<span>278</span> Article", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] }
    // ],
    // "279": [
    //     { 
    //         title: "<span>279</span> Зміна повідомлення про підозру", 
    //         text: [
    //         "Кримінальне процесуальне законодавство України складається з відповідних положень Конституції України, міжнародних договорів, згода на обов’язковість яких надана Верховною Радою України, цього Кодексу та інших законів України.", 
    //         "Зміни до кримінального процесуального законодавства України можуть вноситися виключно законами про внесення змін до цього Кодексу та/або до законодавства про кримінальну відповідальність, та/або до законодавства України про адміністративні правопорушення."
    //     ] }
    // ]
    // };

    const codex = document.querySelector(".codex");
    const codexToggle = document.getElementById("codex-toggle");
    // const topButtons = document.getElementById("codex-topButtons");
    // const titleEl = document.getElementById("codex-title");
    // const textEl = document.getElementById("codex-text");
    // const prevBtn = document.getElementById("codex-prevBtn");
    // const nextBtn = document.getElementById("codex-nextBtn");
    
    codexToggle.addEventListener("click", () => {
        if(codex.classList.contains('is-active')) {
            codex.classList.remove('is-active');
            enableScroll();
        } else {
            codex.classList.add('is-active');
            disableScroll();
        }
    });

    // let currentKey = "";
    // let currentIndex = 0;
    // let allArticles = [];

    // function flattenArticles() {
    //     allArticles = [];

    //     const sortedKeys = Object.keys(articles).sort((a, b) => {
    //         const aStart = parseInt(a.split("-")[0]);
    //         const bStart = parseInt(b.split("-")[0]);
    //         return aStart - bStart;
    //     });
    
    //     sortedKeys.forEach(key => {
    //         articles[key].forEach((article, index) => {
    //             allArticles.push({ key, index, article });
    //         });
    //     });
    // }
  
    // function renderTopButtons() {
    //     topButtons.innerHTML = "";

    //     const sortedKeys = Object.keys(articles).sort((a, b) => {
    //         const aStart = parseInt(a.split("-")[0]);
    //         const bStart = parseInt(b.split("-")[0]);
    //         return aStart - bStart;
    //     });
    
    //     sortedKeys.forEach((key) => {
    //         const btn = document.createElement("button");
    //         btn.classList.add("button");
    //         btn.classList.add("button--md");
    //         btn.classList.add("button--outline");
    //         btn.textContent = key;
    //         btn.classList.toggle("is-active", key === currentKey);
    //         btn.addEventListener("click", () => {
    //             currentKey = key;

    //             const rangeStart = allArticles.findIndex(item => item.key === currentKey);
    //             currentIndex = rangeStart;
    //             updateArticle();
    //             updateTopButtons();
    //         });
    //         topButtons.appendChild(btn);
    //     });
    // }

    // function updateTopButtons() {
    //     [...topButtons.children].forEach(btn => {
    //         const isActive = btn.textContent === currentKey;
    //         btn.classList.toggle("is-active", isActive);
    //         if (isActive) {
    //             btn.scrollIntoView({
    //             behavior: "smooth",
    //             inline: "center",
    //             block: "nearest"
    //             });
    //         }
    //     });
    // }
    
    // function updateArticle() {
    //     const article = allArticles[currentIndex].article;
    //     titleEl.innerHTML = article.title;
    //     textEl.innerHTML = article.text.map(p => `<p>${p}</p>`).join("");
    // }
    
    // prevBtn.addEventListener("click", () => {
    //     currentIndex = (currentIndex - 1 + allArticles.length) % allArticles.length;
    //     currentKey = allArticles[currentIndex].key;
    //     updateArticle();
    //     updateTopButtons();
    // });
    
    // nextBtn.addEventListener("click", () => {
    //     currentIndex = (currentIndex + 1) % allArticles.length;
    //     currentKey = allArticles[currentIndex].key;
    //     updateArticle();
    //     updateTopButtons();
    // });

    // let touchStartX = 0;
    // let touchEndX = 0;

    // textEl.addEventListener("touchstart", (e) => {
    //     touchStartX = e.changedTouches[0].screenX;
    // });

    // textEl.addEventListener("touchend", (e) => {
    //     touchEndX = e.changedTouches[0].screenX;
    //     handleSwipeGesture();
    // });

    // function handleSwipeGesture() {
    // const swipeThreshold = 50;
    // const deltaX = touchEndX - touchStartX;

    // if (Math.abs(deltaX) > swipeThreshold) {
    //     if (deltaX < 0) {
    //         currentIndex = (currentIndex + 1) % allArticles.length;
    //     } else {
    //         currentIndex = (currentIndex - 1 + allArticles.length) % allArticles.length;
    //     }
    //         currentKey = allArticles[currentIndex].key;
    //         updateArticle();
    //         updateTopButtons();
    //     }
    // }
    
    // // init
    // flattenArticles();
    // currentKey = allArticles[0].key;
    // renderTopButtons();
    // updateArticle();
}

export default codex;
