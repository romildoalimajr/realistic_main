document.addEventListener("DOMContentLoaded", () => {
    /**
     * How it works
     */
    const tabItems = document.querySelectorAll('.tabs__item');
    const imageWrappers = document.querySelectorAll('.image-wrapper');
    //console.log(imageWrappers);
    imageWrappers[0].classList.add('active');
    tabItems.forEach((tab) => {
        //console.log(tab);
        tab.addEventListener('click', () => {
            tabItems.forEach((item) => item.classList.remove('active'));

            tab.classList.add('active');
            const tabNumber = tab.getAttribute('data-tab');
            imageWrappers.forEach((wrapper) => {
                wrapper.classList.remove('active');
            });
            const activeImage = document.querySelector(
                `.image-wrapper[data-tab="${tabNumber}"]`
            );
            activeImage.classList.add('active');
        });
    });
})