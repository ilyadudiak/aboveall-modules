let monthInput1 = document.querySelector(".month__wrapper1");
let monthInput2 = document.querySelector(".month__wrapper2");
let monthPlaceHolder1 = document.querySelector(".month__placeholder1");
let monthPlaceHolder2 = document.querySelector(".month__placeholder2");

monthInput1.addEventListener("click", ()=> monthPlaceHolder1.style.display = "none");
monthInput2.addEventListener("click", ()=> monthPlaceHolder2.style.display = "none");