function slider(wrapper, container, slide, sliderDots) {

  const slidesWrapper = document.querySelector(wrapper),
        slidesField   = document.querySelector(container),
        slides        = document.querySelectorAll(slide),
        dots          = document.querySelectorAll(sliderDots),
        width         = window.getComputedStyle(slidesWrapper).width;

  let offset = 0,
      slideIndex = 0,
      timer;

  slidesField.style.cssText = `
    width: ${100 * slides.length}%;
  `;

  slides.forEach(slide => {
    slide.style.width = width;
  });

  dots.forEach((dot, i) => {
    dot.setAttribute("data-slide", i);

    if(i == 0) {
      dot.style.backgroundColor = "#eb4a4a";
    }
  });

  function interval() {
    timer = window.setInterval(() => {

      if(offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
        offset = 0;
        slideIndex = 0;
      } else {
        offset += +width.slice(0, width.length - 2);
        slideIndex++;
      }
  
      slidesField.style.transform = `translateX(-${offset}px)`;
  
      dots.forEach(dot => dot.style.backgroundColor = "#fff");
      dots[slideIndex].style.backgroundColor = "#eb4a4a";
    }, 3000);
  }

  interval();

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const slideDot = e.target.getAttribute("data-slide");

      slideIndex = slideDot;

      offset = +width.slice(0, width.length - 2) * (slideDot);
      slidesField.style.transform = `translateX(-${offset}px)`;

      dots.forEach(dot => dot.style.backgroundColor = "#fff");
      dots[slideIndex].style.backgroundColor = "#eb4a4a";

      clearInterval(timer);
      interval();
    });
  });
}

export {slider};