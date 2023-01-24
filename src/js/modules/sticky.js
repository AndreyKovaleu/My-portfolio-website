function sticky(section, activeClass) {
  const header = document.querySelector(section);
  
  window.addEventListener("scroll", function() {
    header.classList.toggle(activeClass, window.scrollY > 0);
  });
}

export {sticky};