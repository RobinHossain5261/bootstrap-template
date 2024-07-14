"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // ==================navbar start==============
  const mobileNav = document.querySelector(".mobile-nav");
  const toggleBtn = document.querySelectorAll(".toggle-btn");

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      mobileNav.classList.toggle("close");
    });
  });
  // dropdown menu
  const dropdownBtn = document.querySelectorAll(".dropdown-menus");
  dropdownBtn.forEach((btn) => {
    const dropMenu = btn.querySelector(".dropdown");
    btn.addEventListener("click", function () {
      dropMenu.classList.toggle("show");

      //   close any other dropdown menu
      dropdownBtn.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          const closeMenu = otherBtn.querySelector(".dropdown");
          closeMenu.classList.remove("show");
        }
      });
    });
  });

  // menu active
  const navLinks = document.querySelectorAll(".menu-link a");
  const currentUrl = window.location.href.split(/[?#]/)[0];
  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.classList.add("active");
      // Add active class to the parent menu-item if it exists
      const parentMenuItem = link.closest(".dropdown-menus");
      if (parentMenuItem) {
        parentMenuItem.classList.add("active");
      }
    }
  });
  // ==================navbar end==============

  //   end
});
