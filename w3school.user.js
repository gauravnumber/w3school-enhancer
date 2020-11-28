// ==UserScript==
// @name        w3schools enhancer
// @namespace   Violentmonkey Scripts
// @match       https://www.w3schools.com/*/tryit.asp
// @grant       none
// @version     1.0
// @author      -
// @description 11/15/2020, 1:28:09 PM
// ==/UserScript==

document.onkeyup = function(e) {
    // when you tyoe R it rotate screen
    if (e.altKey && e.which == 82) {
        restack(currentStack);
    }
    // when type N it run program
    if (e.altKey && e.which == 78) {
        submitTryit(1);
    }
}