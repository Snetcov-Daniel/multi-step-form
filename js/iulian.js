"use strict"

const next1 = document.querySelector(".next-action-button");
const next2 = document.querySelector(".next-action-button2");
const prev1 = document.querySelector('.previous-action-button');
const prev2 = document.querySelector('.previous-action-button2');
const forms = document.querySelectorAll(".step");


next1.addEventListener("click",() => {
    forms[0].style.top = "-1000px";
    forms[1].style.top = "0";
});
next2.addEventListener("click",() => {
    forms[1].style.top = "-1000px";
    forms[2].style.top = "0";
});

prev1.addEventListener("click",() => {
    forms[1].style.top = "-1000px";
    forms[0].style.top = "0";
});

prev2.addEventListener("click",() => {
    forms[2].style.top = "-1000px";
    forms[1].style.top = "0";
});