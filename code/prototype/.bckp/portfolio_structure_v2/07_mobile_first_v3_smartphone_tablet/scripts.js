// FOOTER BEHAVIOR

const __background_contact = "#405B70";
const __background_white = "white";
const __default_main_color_black = "#212529";
const __default_main_color_white = "#fcf8f4";
const bottomHeightToChangeFooterColors = 250;

// When the user scrolls down 30px from the top of the document, slide down the navbar
function isUserInCoverComponent() { return !(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30); }

function isUserInFooterComponent() { return (window.innerHeight + window.scrollY) >= document.body.scrollHeight - bottomHeightToChangeFooterColors; }

function footerTransformToHidden() { document.getElementsByTagName("footer")[0].style.bottom = "-60px"; }

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

function scrollFunction() {
    // to hidden footer in cover component
    if (isUserInCoverComponent()) { footerTransformToHidden(); } else { footerTransformToVisible(); }
    // to merge footer to contact component 
    if (isUserInFooterComponent()) { footerTransformToContactComponent(); } else { footerTransformToFooterComponent(); }
}

window.onscroll = function () { scrollFunction() };

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