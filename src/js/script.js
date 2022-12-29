"use strict";

import {tabs} from './modules/tabs.js';
import {form} from './modules/form.js';


window.addEventListener('DOMContentLoaded', () => {

  tabs(".experience__button", ".experience__content", ".experience__tabs", "experience__button_active");
  form();

});



// const header = document.querySelector("header");

// window.addEventListener("scroll", function() {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });