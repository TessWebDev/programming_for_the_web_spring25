const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true //adds to active slide
        delete activeSlide.dataset.active // removes from active slide
    })
})

// //Varaibles
// let images = [...document.querySelectorAll('.img')];
// let slider = document.querySelector('.slider');
// let sliderWidth;
// let imageWidth;
// let current = 0;
// let target = 0;
// let ease = .05

// window,addEventListener('resize', init); // so the carousel always fits page width

// images.forEach((img, idx) => {
//     img.style.backgroundImage = `url(./images/${idx+1}.png)` // images applied to img div. +1 start images off at 0 
// })

// function lerp(start, end, t){
//     return start * (1-t) + end * t; //start and end position, smooth animation
// }

// function setTransform(el, transform) {
//     el.style.transform = transform; //what the function does
// }

// function init(){ //function to call when page is loaded
//     sliderWidth = slider.getBoundingClientRect().width;
//     imageWidth = sliderWidth / images.length;
//     document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px` // gives scroll bar?
// }

// function animate() { //
//     current = parseFloat(lerp(current, target, ease)).toFixed(2);
//     target = window.scrollY; //amount of px scroll down by
//     setTransform(slider, `translateX(-${current}px)`)
//     animateImages();
//     requestAnimationFrame(animate);
// }
//  function animateImages() {
//     let ratio = current / imageWidth;
//     let intersectionRatioValue;

//     images.forEach((image, idx) => {
//         intersectionRatioValue = ratio - (idx * 0.7); 
//         setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
//     })
//  }
// init();
// animate();

