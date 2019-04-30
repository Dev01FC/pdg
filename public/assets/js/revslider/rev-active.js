'use strict';

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        } 
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  includeHTML();
$(document).ready(function () {
    $("#rev_slider_1_1, #rev_slider_2_1, #rev_slider_3_1,#rev_slider_4_1, #rev_slider_5_1").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 6000,
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "on",
            arrows: {
                style: "hebe",
                enable: true,
                hide_onmobile: false,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap"><span class="tp-arr-titleholder">{{title}}</span><span class="tp-arr-imgholder"></span></div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 20,
                    v_offset: 0
                }
            }
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1170, 1024, 778, 480],
        gridheight: [570, 570, 500, 500],
        lazyType: "none",
        parallax: {
            type: "mouse+scroll",
            origo: "enterpoint",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        },
        shadow: 0,
        spinner: "spinner0",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
        }
    });
});