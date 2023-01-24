"use strict";

import { sticky } from './modules/sticky.js';
import { tabs } from './modules/tabs.js';
import { slider } from './modules/slider.js';
import { form } from './modules/form.js';
import { testWebP } from './modules/webPTest.js';

window.addEventListener('DOMContentLoaded', () => {
  testWebP(document.body);
  sticky(".header", "sticky");
  tabs(".experience__button", ".experience__content", ".experience__tabs", "experience__button_active");
  slider(".skills__slider-box", ".skills__slider", ".skills__slide", ".skills__indicator");
  tabs(".portfolio__button", ".portfolio__list", ".portfolio__tabs", "portfolio__button_active");
  form();
});