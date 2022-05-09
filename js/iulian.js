"use strict"

const next1 = document.querySelector(".next-action-button");
const next2 = document.querySelector(".next-action-button2");
const prev1 = document.querySelector('.previous-action-button');
const prev2 = document.querySelector('.previous-action-button2');
const forms = document.querySelectorAll(".step");
const progress = document.querySelectorAll('#progressbar li');

next1.addEventListener("click",() => {
    forms[0].style.top = "-1000px";
    forms[1].style.top = "0";
    progress[1].classList.add("active");
});
next2.addEventListener("click",() => {
    forms[1].style.top = "-1000px";
    forms[2].style.top = "0";
    progress[2].classList.add("active");
});

prev1.addEventListener("click",() => {
    forms[1].style.top = "-1000px";
    forms[0].style.top = "0";
    progress[1].classList.remove("active");
});

prev2.addEventListener("click",() => {
    forms[2].style.top = "-1000px";
    forms[1].style.top = "0";
    progress[2].classList.remove("active");
});