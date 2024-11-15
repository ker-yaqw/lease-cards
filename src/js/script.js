"use strict";

import { ready } from "./helpers/document-ready.js";
import { getDeviceType } from "./helpers/check-device.js";
import Swiper from "swiper/bundle";

ready(function () {
  console.log("DOM героически построен!");
  getDeviceType();

  //slider
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
  //header menu
  const menuBtn = document.querySelector('.menu__btn');
  const menu = document.querySelector('.menu__list');
  
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
  });


  //tabs
  const tabItem = document.querySelectorAll(".tabs__btn-item");
  const tabContent = document.querySelectorAll(".tabs__content-item");

  tabItem.forEach(function (element) {
    element.addEventListener("click", open);
  });

  function open(e) {
    const tabTarget = e.currentTarget;
    const button = tabTarget.dataset.button;


    tabItem.forEach(function (item) {
      item.classList.remove("tabs__btn-item--active");
    });

    tabTarget.classList.add("tabs__btn-item--active");

    tabContent.forEach(function(item) {
      item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
  }
});
