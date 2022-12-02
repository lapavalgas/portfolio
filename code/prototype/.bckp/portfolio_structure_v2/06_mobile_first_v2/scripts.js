// identificar overflow
document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Found the worst element ever: ', el);
    }
});

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}






// menu hamburguer
function menuToggle() {
    if (document.getElementsByClassName("nav-content-hidden").length === 0) {
        document.getElementsByTagName("nav")[0].classList.add("nav-content-hidden");
        if (document.getElementById("toggle").checked) {
            document.getElementById("toggle").checked = false;
        }
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("nav-content-hidden");
        document.getElementsByTagName("body")[0].style
    }
}






// corrige posição inicial do carrosel flickity /// esse problema me ocorreu apenas em desktop ///
document.addEventListener('DOMContentLoaded', function () {
    // setTimeout(function () {
    //     //your code here
    //     document.getElementsByClassName("flickity-slider")[0].style.transform = "translateX(-3%)";
    // }, .5);
}, false);






// ESSE SCRIPT DEVERÁ FUNCIONAR APENAS NO MOBILE

// essas são as constantes para alterar os valores do footer
const __background_contact = "#405B70";
const __background_white = "white";
const __default_main_color_black = "#212529";
const __default_main_color_white = "#fcf8f4";

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    // para desaparecer o footer na capa o primeiro if 
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementsByTagName("footer")[0].style.bottom = "0";
    } else {
        document.getElementsByTagName("footer")[0].style.bottom = "-50px";
    }

    // para alterar a cor do footer no contactme o segundo if 
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // transforma o footer em parte de contact
        document.getElementsByTagName("footer")[0].style.backgroundColor = __background_contact;
        let array = document.getElementsByClassName("icon");
        for (var element = 0; element < array.length; element++) {
            array[element].style.fill = __default_main_color_white;
        }
    } else {
        // transforma o footer em parte do website
        document.getElementsByTagName("footer")[0].style.backgroundColor = __background_white;
        let array = document.getElementsByClassName("icon");
        for (var element = 0; element < array.length; element++) {
            array[element].style.fill = __default_main_color_black;
        }
    }
}


// essa função identifica portrait ou landscap com o JS
// window.addEventListener('orientationchange', function () {
//     switch (window.orientation) {
//         case -90: case 90: alert('landscape');
//             break;
//         default: alert('portrait');
//             break;
//     }
// });