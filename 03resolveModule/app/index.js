const $ = require("jquery");
const $$ = require("Vendor/jquery-2.2.4.min.js");
const el = document.querySelectorAll("p")

document.addEventListener("DOMContentLoaded", _ => {
    el[0].innerHTML = "loaded jQuery version is " + $.fn.jquery
    el[1].innerHTML = "loaded jQuery version is " + $$.fn.jquery
    el[2].innerHTML = "loaded jQuery version is " + $$$.fn.jquery
})