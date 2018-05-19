import { isItOdd } from "./odd.mjs";

/* global.js */

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn1').addEventListener('click', function () {
        alert('This button was clicked');
        alert(isItOdd(2));
    })
}, false);
