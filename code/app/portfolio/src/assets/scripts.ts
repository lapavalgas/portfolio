/***-------------------------------------------------------
        CONSTANTS
--------------------------------------------------------***/

import languages from "@/data/languages.json";

const ENGLISH = languages.list[0];
const PORTUGUESE = languages.list[1];
const ITALIAN = languages.list[2];

const ENGLISH_ABB = "en";
const PORTUGUESE_ABB = "pt";
const ITALIAN_ABB = "it";

/***-------------------------------------------------------
        CSS VARIABLES
--------------------------------------------------------***/

const __background_contact: string = "#405B70";
const __background_white: string = "white";
const __default_main_color_black: string = "#212529";
const __default_main_color_white: string = "#fcf8f4";
const __menuFormSelectColor_black: string = "1px solid rgba(0, 0, 0, 0.082)";
const __menuFormSelectColor_white: string = "1px solid rgba(243, 243, 243, 0.16)";

const __default_footer_size: string = "24px";
const __default_footer_level: string = "0px";
const __default_footer_size_at_contact_session: string = "24px";
const __default_footer_level_at_contact_session: string = "70px";

const bottomHeightToChangeFooterColors: number = 250;

const SCREEN_COVER: string = "#cover-link";
const SCREEN_ABOUT: string = "#about";
const SCREEN_SKILLS: string = "#skills";
const SCREEN_SHOWCASES: string = "#showcases";
const SCREEN_PROJECTS: string = "#projects";
const SCREEN_CONTACT: string = "#contact";

const viewportWidth: number = window.innerWidth || document.documentElement.clientWidth;
const viewportHeight: number = window.innerHeight || document.documentElement.clientHeight;

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

function isUserInMobileDevice(): boolean {
  return screen.width <= 1024;
}

function isUserInCoverComponent(): boolean {
  return !(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70);
}

function isUserInFooterComponent(): boolean {
  return window.innerHeight + window.scrollY >= document.body.scrollHeight - bottomHeightToChangeFooterColors;
}

function isNavContentHidden(): boolean {
  return !(document.getElementsByClassName("nav-content-hidden").length === 0);
}

function scrollingDisable(): void {
  document.body.classList.add("stop-scrolling");
}

function scrollingEnable(): void {
  document.body.classList.remove("stop-scrolling");
}

/***-------------------------------------------------------
          CHANGE CSS FUNCTIONS 
--------------------------------------------------------***/

function footerTransformToHidden(): void {
  document.getElementsByTagName("footer")[0].style.bottom = "-70px";
}

function footerTransformToVisible(): void {
  document.getElementsByTagName("footer")[0].style.bottom = "0";
}

function footerTransformToContactComponent(): void {
  document.getElementsByTagName("footer")[0].style.backgroundColor = __background_contact;
  let array = document.getElementsByClassName("icon");
  for (let element of array) {
    element.style.fill = __default_main_color_white;
    element.style.width = __default_footer_size_at_contact_session;
    element.style.height = __default_footer_size_at_contact_session;
    element.style.paddingBottom = __default_footer_level_at_contact_session;
  }
  document.getElementById("author").style.opacity = "1";
}

function footerTransformToFooterComponent(): void {
  document.getElementsByTagName("footer")[0].style.backgroundColor = __background_white;
  let array = document.getElementsByClassName("icon");
  for (let element of array) {
    element.style.fill = __default_main_color_black;
    element.style.width = __default_footer_size;
    element.style.height = __default_footer_size;
    element.style.paddingBottom = __default_footer_level;
  }
  document.getElementById("author").style.opacity = "0";
}

function menuTransformColorWhite(): void {
  document.getElementsByTagName("ul")[0].style.color = __default_main_color_white;
  document.getElementsByClassName("form-select")[0].style.border = __menuFormSelectColor_white;
}

function menuTransformColorBlack(): void {
  document.getElementsByTagName("ul")[0].style.color = __default_main_color_black;
  document.getElementsByClassName("form-select")[0].style.border = __menuFormSelectColor_black;
}

function logoTransformOpacityZero(): void {
  document.getElementsByClassName("logo")[0].style.opacity = "0";
}

function logoTransformOpacityOne(): void {
  document.getElementsByClassName("logo")[0].style.opacity = "1";
}

function logoTransformColorBlack(): void {
  document.getElementsByClassName("logo")[0].style.color = __default_main_color_black;
}

function logoTransformColorWhite(): void {
  document.getElementsByClassName("logo")[0].style.color = __default_main_color_white;
}

function scrollDownTransformToVisible(): void {
  document.getElementsByClassName("scrolldown")[0].style.opacity = "1";
}

function scrollDownTransformToHidden(): void {
  document.getElementsByClassName("scrolldown")[0].style.opacity = "0";
}

/***-------------------------------------------------------
          GENERAL PORTFOLIO BEHAVIOUR
--------------------------------------------------------***/

// NAV MENU LOGIC CONTROLS
function hiddenMenuFunction(): void {
  let array = document.getElementsByClassName("hidden-mobile");
  if (isUserInMobileDevice()) {
    for (let element of array) {
      (element as HTMLElement).style.display = "none";
    }
  } else {
    for (let element of array) {
      (element as HTMLElement).style.display = "block";
    }
  }
}

function navContentTransformToHidden(): void {
  document.getElementsByTagName("nav")[0].classList.add("nav-content-hidden");
  if (document.getElementById("toggle")!.checked) {
    (document.getElementById("toggle") as HTMLInputElement).checked = false;
  }
  scrollingEnable();
}

function navContentTransformToVisible(): void {
  document.getElementsByTagName("nav")[0].classList.remove("nav-content-hidden");
  scrollingDisable();
}

function navContentUnselectAllMenu(): void {
  let elementsToUnselect = document.getElementsByClassName("nav-item");
  for (let el of elementsToUnselect) {
    el.firstElementChild!.classList.remove("selected");
  }
}

function navContentSelectMenuById(id: string): void {
  navContentUnselectAllMenu();
  document.getElementById(id + "-menu-link")!.classList.add("selected");
}

function readElementsInViewPort(): { screen: string; isVisible: boolean }[] {
  const portfolioScreens = [
    document.querySelector(SCREEN_COVER)!,
    document.querySelector(SCREEN_ABOUT)!,
    document.querySelector(SCREEN_SKILLS)!,
    document.querySelector(SCREEN_SHOWCASES)!,
    document.querySelector(SCREEN_PROJECTS)!,
    document.querySelector(SCREEN_CONTACT)!,
  ];

  const portfolioScreensRect = portfolioScreens.map((e) => ({
    screen: (e as HTMLElement).id,
    screenRect: (e as HTMLElement).getBoundingClientRect(),
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

function navContentSelectMenuByViewport(): string | undefined {
  let id: string | undefined;
  const portfolioScreensInViewport = readElementsInViewPort();
  for (const e of portfolioScreensInViewport) {
    if (e.isVisible) {
      navContentSelectMenuById(e.screen);
      id = e.screen;
    }
  }
  return id;
}

function menuToggle(id?: string): void {
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
function scrollFunction(): void {
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

function uuidv4(): string {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

/***-------------------------------------------------------
          export default
--------------------------------------------------------***/

export default { menuToggle, ENGLISH, ENGLISH_ABB, PORTUGUESE, PORTUGUESE_ABB, ITALIAN, ITALIAN_ABB };
