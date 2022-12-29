function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = "none";
    });

    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].style.display = "grid";
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {

    e = e || window.event;

    if(e.target && e.target.closest(tabsSelector)) {
      tabs.forEach((item, i) => {
        if(e.target.closest(tabsSelector) == item && !item.classList.contains(activeClass)) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

export {tabs};