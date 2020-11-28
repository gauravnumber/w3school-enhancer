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

    // when left arrow then go to previous chapter
    if (e.which == 37) {
        let href = document.querySelector(".w3-left.w3-btn").getAttribute("href");
        window.location.assign(href)
    }

    // when right arrow type then
    // transfer into next chapter
    if (e.which == 39) {
        let href = document.querySelector(".w3-right.w3-btn").getAttribute("href");
        window.location.assign(href)
    }
}
