/***-------------------------------------------------------
        CSS VARIABLES
--------------------------------------------------------***/

const __background_contact = "#405B70";
const __background_white = "white";
const __default_main_color_black = "#212529";
const __default_main_color_white = "#fcf8f4";
const __menuFormSelectColor_black = "1px solid rgba(0, 0, 0, 0.082)";
const __menuFormSelectColor_white = "1px solid rgba(243, 243, 243, 0.16)";

const __default_footer_size = "24px";
const __default_footer_level = "0px";
const __default_footer_size_at_contact_session = "24px";
const __default_footer_level_at_contact_session = "70px";

const bottomHeightToChangeFooterColors = 250;

const SCREEN_COVER = "#cover-link";
const SCREEN_ABOUT = "#about";
const SCREEN_SKILLS = "#skills";
const SCREEN_SHOWCASES = "#showcases";
const SCREEN_PROJECTS = "#projects";
const SCREEN_CONTACT = "#contact";

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

/***-------------------------------------------------------
          PAGE BEHAVIOUR
--------------------------------------------------------***/

window.onresize = function () {
  hiddenMenuFunction();
};

window.onload = function () {
  hiddenMenuFunction();
};

window.onscroll = function () {
  scrollFunction();
};

/***-------------------------------------------------------
          USEFUL FUNCTIONS
--------------------------------------------------------***/

function isUserInMobileDevice() {
  return screen.width <= 1024 || document.documentElement.clientWidth <= 1024;
}

function isUserInCoverComponent() {
  return !(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70);
}

function isUserInFooterComponent() {
  return window.innerHeight + window.scrollY >= document.body.scrollHeight - bottomHeightToChangeFooterColors;
}

function isNavContentHidden() {
  return !(document.getElementsByClassName("nav-content-hidden").length === 0);
}

function scrollingDisable() {
  document.body.classList.add("stop-scrolling");
}

function scrollingEenable() {
  document.body.classList.remove("stop-scrolling");
}

/***-------------------------------------------------------
          CHANGE CSS FUNCTIONS 
--------------------------------------------------------***/

function footerTransformToHidden() {
  document.getElementsByTagName("footer")[0].style.bottom = "-70px";
}

function footerTransformToVisible() {
  document.getElementsByTagName("footer")[0].style.bottom = "0";
}

function footerTransformToContactComponent() {
  document.getElementsByTagName("footer")[0].style.backgroundColor = __background_contact;
  let array = document.getElementsByClassName("icon");
  for (let element of array) {
    element.style.fill = __default_main_color_white;
    element.style.width = __default_footer_size_at_contact_session;
    element.style.height = __default_footer_size_at_contact_session;
    element.style.paddingBottom = __default_footer_level_at_contact_session;
  }
  document.getElementById("author").style.opacity = 1;
}

function footerTransformToFooterComponent() {
  document.getElementsByTagName("footer")[0].style.backgroundColor = __background_white;
  let array = document.getElementsByClassName("icon");
  for (let element of array) {
    element.style.fill = __default_main_color_black;
    element.style.width = __default_footer_size;
    element.style.height = __default_footer_size;
    element.style.paddingBottom = __default_footer_level;
  }
  document.getElementById("author").style.opacity = 0;
}

function menuTransformColorWhite() {
  document.getElementsByTagName("ul")[0].style.color = __default_main_color_white;
  document.getElementsByClassName("form-select")[0].style.border = __menuFormSelectColor_white;
}

function menuTransformColorBlack() {
  document.getElementsByTagName("ul")[0].style.color = __default_main_color_black;
  document.getElementsByClassName("form-select")[0].style.border = __menuFormSelectColor_black;
}

function logoTransformOpacityZero() {
  document.getElementsByClassName("logo")[0].style.opacity = 0;
}
function logoTransformOpacityOne() {
  document.getElementsByClassName("logo")[0].style.opacity = 1;
}
function logoTransformColorBlack() {
  document.getElementsByClassName("logo")[0].style.color = __default_main_color_black;
}
function logoTransformColorWhite() {
  document.getElementsByClassName("logo")[0].style.color = __default_main_color_white;
}
function scrollDownTransformToVisible() {
  document.getElementsByClassName("scrolldown")[0].style.opacity = 1;
}
function scrollDownTransformToHidden() {
  document.getElementsByClassName("scrolldown")[0].style.opacity = 0;
}

/***-------------------------------------------------------
          GENERAL PORTFOLIO BEHAVIOUR
--------------------------------------------------------***/

// NAV MENU LOGIC CONTROLS
function hiddenMenuFunction() {
  let array = document.getElementsByClassName("hidden-mobile");
  if (isUserInMobileDevice()) {
    for (let element of array) {
      element.style.display = "none";
    }
  } else {
    for (let element of array) {
      element.style.display = "block";
    }
  }
}

function navContentTransformToHidden() {
  document.getElementsByTagName("nav")[0].classList.add("nav-content-hidden");
  if (document.getElementById("toggle").checked) {
    document.getElementById("toggle").checked = false;
  }
  scrollingEenable();
}

function navContentTransformToVisible() {
  document.getElementsByTagName("nav")[0].classList.remove("nav-content-hidden");
  scrollingDisable();
}

function navContentUnselectAllMenu(id) {
  let elementsToUnselect = document.getElementsByClassName("nav-item");
  for (let el of elementsToUnselect) {
    el.firstElementChild.classList.remove("selected");
  }
}

function navContentSelectMenuById(id) {
  navContentUnselectAllMenu();
  document.getElementById(id + "-menu-link").classList.add("selected");
}

function readElementsInViewPort() {
  const portfolioScreens = [
    document.querySelector(SCREEN_COVER),
    document.querySelector(SCREEN_ABOUT),
    document.querySelector(SCREEN_SKILLS),
    document.querySelector(SCREEN_SHOWCASES),
    document.querySelector(SCREEN_PROJECTS),
    document.querySelector(SCREEN_CONTACT),
  ];

  const portfolioScreensRect = portfolioScreens.map((e) => ({
    screen: e.id,
    screenRect: e.getBoundingClientRect(),
  }));

  return portfolioScreensRect.map((e) => ({
    screen: e.screen,
    isVisible:
      e.screenRect.top >= 0 &&
      e.screenRect.left >= 0 &&
      e.screenRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      e.screenRect.right <= (window.innerWidth || document.documentElement.clientWidth),
  }));
}

function navContentSelectMenuByViewport() {
  let id;
  const portfolioScreensInViewport = readElementsInViewPort();
  for (const e of portfolioScreensInViewport) {
    if (e.isVisible) {
      navContentSelectMenuById(e.screen);
      id = e.screen;
    }
  }
  return id;
}

function menuToggle(id) {
  console.log("teste");
  if (isUserInMobileDevice()) {
    if (isNavContentHidden()) {
      navContentTransformToVisible();
      footerTransformToHidden();
    } else {
      navContentTransformToHidden();
      if (!isUserInCoverComponent()) {
        footerTransformToVisible();
      }
    }
  } else {
    if (id) {
      navContentUnselectAllMenu();
      navContentSelectMenuById(id);
    }
  }
}

// SCROLLING LOGIC CONTROLS
function scrollFunction() {
  navContentUnselectAllMenu();
  navContentSelectMenuByViewport();
  // to hidden footer in cover component
  if (isUserInCoverComponent()) {
    footerTransformToHidden();
    logoTransformOpacityZero();
    scrollDownTransformToVisible();
  } else {
    footerTransformToVisible();
    logoTransformOpacityOne();
    scrollDownTransformToHidden();
  }
  // to merge footer to contact component
  if (isUserInFooterComponent()) {
    footerTransformToContactComponent();
    logoTransformColorWhite();
    if (!isUserInMobileDevice()) {
      menuTransformColorWhite();
    }
  } else {
    footerTransformToFooterComponent();
    logoTransformColorBlack();
    menuTransformColorBlack();
  }
}

/***-------------------------------------------------------
          UUIDv4
--------------------------------------------------------***/

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}
