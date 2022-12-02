const scrollPageLink1 = "scroll-page-link-1";
const scrollPageLink2 = "scroll-page-link-2";
const scrollPageLink3 = "scroll-page-link-3";
const scrollPageLink4 = "scroll-page-link-4";
const scrollPageLink5 = "scroll-page-link-5";
const scrollPageLink6 = "scroll-page-link-6";

let scrollPageLoaded = scrollPageLink1;

function scrollTo(scroll_page) {
  // console.log("in:"+scrollPageLoaded);
  setTimeout(function () {
    setTimeout(function () {
      document.getElementById(scroll_page).click();
    }, 50);
    scrollPageLoaded = scroll_page;
  }, 700);
  // console.log("out:"+scrollPageLoaded);
}

let actived = false;

window.onwheel = e => {
  if (!actived) {
    actived = true;

    if (e.deltaY >= 0) {
      // Scrolling Down with mouse
      // console.log('Scroll Down');
      switch (scrollPageLoaded) {
        case scrollPageLink1:
          scrollTo(scrollPageLink2);
          break;
        case scrollPageLink2:
          scrollTo(scrollPageLink3);
          break;
        case scrollPageLink3:
          scrollTo(scrollPageLink4);
          break;
        case scrollPageLink4:
          scrollTo(scrollPageLink5);
          break;
        case scrollPageLink5:
          scrollTo(scrollPageLink6);
          break;
        case scrollPageLink6:
          break;
        default:
          break;
      }
      actived = false;
    } else {
      actived = true;
      // Scrolling Up with mouse
      // console.log('Scroll Up');
      switch (scrollPageLoaded) {
        case scrollPageLink1:
          break;
        case scrollPageLink2:
          scrollTo(scrollPageLink1);
          break;
        case scrollPageLink3:
          scrollTo(scrollPageLink2);
          break;
        case scrollPageLink4:
          scrollTo(scrollPageLink3);
          break;
        case scrollPageLink5:
          scrollTo(scrollPageLink4);
          break;
        case scrollPageLink6:
          scrollTo(scrollPageLink5);
          break;
        default:
          break;
      }
      actived = false;
    }
  }
}

// window.onwheel = e => {
//   if(e.deltaY >= 0){
//     setTimeout(function(){
//     // Scrolling Down with mouse
//     console.log('Scroll Down');
//     document.getElementById("page-contact-link").click();
//   }, 500);
//   } else {
//     // Scrolling Up with mouse
//     console.log('Scroll Up');
//   }
// }
// base algorithm
//   window.onwheel = e => {
//     if(e.deltaY >= 0){
//       // Scrolling Down with mouse
//       console.log('Scroll Down');
//     } else {
//       // Scrolling Up with mouse
//       console.log('Scroll Up');
//     }
//   }