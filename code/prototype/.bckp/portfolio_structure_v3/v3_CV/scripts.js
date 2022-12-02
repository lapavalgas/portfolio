// FOOTER BEHAVIOR

const __background_contact = "#405B70";
const __background_white = "white";
const __default_main_color_black = "#212529";
const __default_main_color_white = "#fcf8f4";
const bottomHeightToChangeFooterColors = 250;

// When the user scrolls down 30px from the top of the document, slide down the navbar
function isUserInMobileDevice() { return (screen.width <= 1024); }

function isUserInCoverComponent() { return !(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70); }

function isUserInFooterComponent() { return (window.innerHeight + window.scrollY) >= document.body.scrollHeight - bottomHeightToChangeFooterColors; }

function footerTransformToHidden() { document.getElementsByTagName("footer")[0].style.bottom = "-70px"; }

function footerTransformToVisible() { document.getElementsByTagName("footer")[0].style.bottom = "0"; }

function footerTransformToContactComponent() {
    document.getElementsByTagName("footer")[0].style.backgroundColor = __background_contact;
    let array = document.getElementsByClassName("icon");
    for (element of array) {
        element.style.fill = __default_main_color_white;
    }
}

function footerTransformToFooterComponent() {
    document.getElementsByTagName("footer")[0].style.backgroundColor = __background_white;
    let array = document.getElementsByClassName("icon");
    for (element of array) {
        element.style.fill = __default_main_color_black;
    }
}
const __menuFormSelectColor_black = "1px solid rgba(0, 0, 0, 0.082)";
const __menuFormSelectColor_white = "1px solid rgba(243, 243, 243, 0.16)";

function menuTransformColorWhite() {
    document.getElementsByTagName('ul')[0].style.color = __default_main_color_white;
    document.getElementsByClassName('form-select')[0].style.border = __menuFormSelectColor_white;
}

function menuTransformColorBlack() {
    document.getElementsByTagName('ul')[0].style.color = __default_main_color_black;
    document.getElementsByClassName('form-select')[0].style.border = __menuFormSelectColor_black;
}


function logoTransformOpacityZero() { document.getElementsByClassName('logo')[0].style.opacity = 0; }
function logoTransformOpacityOne() { document.getElementsByClassName('logo')[0].style.opacity = 1; }
function logoTransformColorBlack() { document.getElementsByClassName('logo')[0].style.color = __default_main_color_black; }
function logoTransformColorWhite() { document.getElementsByClassName('logo')[0].style.color = __default_main_color_white; }
function scrollDownTransformToVisible() { document.getElementsByClassName('scrolldown')[0].style.opacity = 1; }
function scrollDownTransformToHidden() { document.getElementsByClassName('scrolldown')[0].style.opacity = 0; }


function scrollFunction() {
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

window.onscroll = function () { scrollFunction() };

function hiddenMenuFunction() {
    let array = document.getElementsByClassName("hidden-mobile");
    if (isUserInMobileDevice()) {
        for (element of array) { element.style.display = "none" }
    } else {
        for (element of array) { element.style.display = "block" }
    }
}

window.onresize = function () { hiddenMenuFunction() };

window.onload = function () { hiddenMenuFunction(); };

// =========================================================================================================================

// HAMBURGUER MENU

function isNavContentHidden() { return !(document.getElementsByClassName("nav-content-hidden").length === 0) }

function scrollingDisable() { document.body.classList.add("stop-scrolling"); }

function scrollingEenable() { document.body.classList.remove("stop-scrolling"); }

function navContentTransformToHidden() {
    document.getElementsByTagName("nav")[0].classList.add("nav-content-hidden");
    if (document.getElementById("toggle").checked) {
        document.getElementById("toggle").checked = false;
    }
    scrollingEenable()
}

function navContentTransformToVisible() {
    document.getElementsByTagName("nav")[0].classList.remove("nav-content-hidden");
    scrollingDisable();
}

function menuToggle() {
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
    }
}

// =========================================================================================================================








// corrige posição inicial do carrosel flickity /// esse problema me ocorreu apenas em desktop ///
document.addEventListener('DOMContentLoaded', function () {
    // setTimeout(function () {
    //     //your code here
    //     document.getElementsByClassName("flickity-slider")[0].style.transform = "translateX(-3%)";
    // }, .5);
}, false);










// essa função identifica portrait ou landscap com o JS
// window.addEventListener('orientationchange', function () {
//     switch (window.orientation) {
//         case -90: case 90: alert('landscape');
//             break;
//         default: alert('portrait');
//             break;
//     }
// });




// identificar overflow
// document.querySelectorAll('*').forEach(el => {
//     if (el.offsetWidth > document.documentElement.offsetWidth) {
//         console.log('Found the worst element ever: ', el);
//     }
// });

// function isOverflown(element) {
//     return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
// }