"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

document.addEventListener("DOMContentLoaded", function () {
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header").style.top = "-1px";
    } else {
      document.querySelector(".header").style.top = "-80px";
    }

    prevScrollpos = currentScrollPos;
  };

  var respMenu = document.querySelector(".resp-menu");
  var respButton = document.querySelector(".js-menu-toggle");
  var body = document.querySelector("body");
  respButton.addEventListener("click", function () {
    body.classList.toggle("menu-open");
    respButton.classList.toggle("menu-toggle--active");
  });
  var mobileMenuItems = Array.from(document.querySelectorAll(".resp-menu a"));
  mobileMenuItems.forEach(function (value, key) {
    value.addEventListener("click", function () {
      body.classList.toggle("menu-open");
      respButton.classList.toggle("menu-toggle--active");
    });
  });
  /* SLIDE UP */

  var slideUp = function slideUp(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function () {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  /* SLIDE DOWN */


  var slideDown = function slideDown(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    target.style.removeProperty("display");
    var display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function () {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  /* TOOGLE */


  var slideToggle = function slideToggle(target) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

    if (window.getComputedStyle(target).display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  var faqItems = document.querySelectorAll(".faq__question");

  if (faqItems) {
    faqItems.forEach(function (value, key) {
      value.addEventListener("click", function () {
        slideToggle(value.querySelector(".faq__question-answer"));
        value.classList.toggle("faq__question--active");
      });
    });
  }

  gsap.registerPlugin("scrollTrigger");
  gsap.from(".white-rabbit", {
    scrollTrigger: {
      trigger: ".hero",
      scrub: 2,
      start: "top bottom",
      end: "80% 100%"
    },
    y: 200,
    ease: "none"
  });
  gsap.from(".gallery__row--top", {
    scrollTrigger: {
      trigger: ".gallery__row--top",
      scrub: 2,
      start: "top bottom",
      end: "top top"
    },
    x: -200,
    transformOrigin: "left center",
    ease: "none"
  });
  gsap.from(".gallery__row--bottom", {
    scrollTrigger: {
      trigger: ".gallery__row--bottom",
      scrub: 2,
      start: "top bottom",
      end: "top top"
    },
    x: 200,
    transformOrigin: "left center",
    ease: "none"
  });
  gsap.from(".launch__rabbit img", {
    scrollTrigger: {
      trigger: ".launch__rabbit",
      scrub: 2,
      start: "center bottom",
      end: "80% 100%"
    },
    x: -100,
    y: -100,
    rotate: -10,
    scale: .5,
    ease: "none"
  }); // Balls

  gsap.from(".floating-balls__item--half", {
    scrollTrigger: {
      trigger: ".floating-balls__item--half",
      scrub: 1,
      start: "top bottom",
      end: "top center"
    },
    y: 20,
    transformOrigin: "left center",
    ease: "none"
  });
  gsap.from(".floating-balls__item--1", {
    scrollTrigger: {
      trigger: ".floating-balls__item--1",
      scrub: 1,
      start: "top bottom"
    },
    yPercent: 50,
    ease: "none"
  });
  gsap.from(".floating-balls__item--2", {
    scrollTrigger: {
      trigger: ".floating-balls__item--2",
      scrub: 1,
      start: "top bottom"
    },
    yPercent: 80,
    scale: 1.2,
    ease: "none"
  });
  gsap.from(".floating-balls__item--3", {
    scrollTrigger: {
      trigger: ".floating-balls__item--3",
      scrub: 1,
      start: "top bottom"
    },
    yPercent: 120,
    ease: "none"
  }); // Side elements

  gsap.from(".side-elements__item--corner", {
    scrollTrigger: {
      trigger: ".side-elements__item--corner",
      scrub: 1,
      start: "top bottom"
    },
    x: 50,
    ease: "none"
  });
  gsap.from(".side-elements__item--left", {
    scrollTrigger: {
      trigger: ".side-elements__item--left",
      scrub: 1,
      start: "top bottom"
    },
    yPercent: -130,
    ease: "none"
  });
  gsap.from(".side-elements__item--right", {
    scrollTrigger: {
      trigger: ".side-elements__item--right",
      scrub: 1,
      start: "top bottom"
    },
    yPercent: 30,
    ease: "none"
  });
  ScrollTrigger.batch("[data-animation='fade-up']", {
    interval: 0.1,
    // time window (in seconds) for batching to occur.
    batchMax: 20,
    onEnter: function onEnter(batch) {
      return gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.09
        },
        ease: "power2.inOut",
        overwrite: true,
        duration: 0.8
      });
    },
    start: "top 90%"
  });
  gsap.registerPlugin(TextPlugin);
  gsap.to(".follow__hash", {
    duration: 3,
    text: {
      value: "#BleuchipCountryClub"
    },
    ease: "none"
  });
  MicroModal.init();
  MicroModal.show('modal-2'); // Countdown

  (function () {
    var countdowns = document.getElementsByClassName('countdown');
    if (countdowns.length === 0) return;

    var createdCountdown = function createdCountdown(el) {
      var end = new Date(el.dataset.count.toString());
      var _second = 1000;

      var _minute = _second * 60;

      var _hour = _minute * 60;

      var _day = _hour * 24;

      var timer;

      function showRemaining() {
        var now = new Date();
        var nowUTC = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        var distance = end - nowUTC;

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        var days = Math.floor(distance / _day);
        var hours = Math.floor(distance % _day / _hour);
        var minutes = Math.floor(distance % _hour / _minute);
        var seconds = Math.floor(distance % _minute / _second);
        var daysEl = el.querySelector('.days');
        var hrsEl = el.querySelector('.hours');

        if (daysEl) {
          daysEl.innerText = days;
        }

        if (hrsEl) {
          hrsEl.innerText = hours;
        } // Mins and seconds will allways have.


        el.querySelector(".minutes").innerText = minutes, el.querySelector(".seconds").innerText = seconds;
      }

      timer = setInterval(showRemaining, 1000);
    };

    _toConsumableArray(countdowns).map(function (el) {
      return createdCountdown(el);
    });
  })();
});