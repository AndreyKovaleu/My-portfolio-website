"use strict";

window.addEventListener('DOMContentLoaded', () => {

  function tabsExperience() {
    const tabs = document.querySelectorAll(".experience__button"),
          tabsContent = document.querySelectorAll(".experience__content"),
          tabsParent = document.querySelector(".experience__tabs");

    function hideTabContent() {
      tabsContent.forEach(item => {
        item.style.display = "none";
      });

      tabs.forEach(tab => {
        tab.classList.remove("experience__button_active");
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].style.display = "grid";
      tabs[i].classList.add("experience__button_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (e) => {
      const target = e.target;

      console.log(target);

      if(target && target.closest(".experience__tabs")) {
        tabs.forEach((item, i) => {
          if(target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });

  }

  // function tabsExperience() {
  
  //   const tabs = document.querySelectorAll(".experience__button"),
  //         tabsContent = document.querySelectorAll(".experience__content"),
  //         tabsParent = document.querySelector(".experience__tabs");
  
  //   function hideTabContent() {
  //     tabsContent.forEach(item => {
  //       item.style.display = "none";
  //     });
  
  //     tabs.forEach(tab => {
  //       tab.classList.remove("experience__button_active");
  //     });
  //   }
  
  //   function showTabContent(i = 0) {
  //     tabsContent[i].style.display = "grid";
  //     tabs[i].classList.add("experience__button_active");
  //   }
  
  //   hideTabContent();
  //   showTabContent();

  //   tabsParent.addEventListener("click", (e) => {
  //     const target = e.target;

  //     if(target && target.classList.contains("experience__button")) {
  //       tabs.forEach((item, i) => {
  //         if(target == item) {
  //           hideTabContent();
  //           showTabContent(i);
  //         }
  //       });
  //     }
  //   });
    
  // }

  tabsExperience();


  // Отправка формы в телеграмм

  const TOKEN   = "5903770777:AAHB6f183fe3t863b91H3E3MPF1li7XNBGU";
  const CHAT_ID = "-1001822122898";
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  document.querySelector("#tg").addEventListener("submit", function(e) {
    e.preventDefault();

    let message = `<b>Имя:</b> ${this.name.value}\n`;
    message += `<b>Почта:</b> ${this.email.value}\n`;
    message += `<b>Сообщение:</b> ${this.text.value}\n`;

    let options = {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message
    };

    fetch(URL_API, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify(options)
    })
    .then((res) => {
      this.name.value = "";
      this.email.value = "";
      this.text.value = "";
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("111");
    });
  });

});










// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });