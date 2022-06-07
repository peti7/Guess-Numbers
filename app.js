'use strict';

const inputNum = document.querySelector("input");
const playBtn = document.querySelector(".play");
const details = document.querySelector(".details");

let winCount = 0;
let loseCount = 0;
playBtn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 100);
    if(inputNum.value){
        if(inputNum.value < 0 || inputNum.value > 100){
            alert("Please input number 1 to 100");
            return;
        }
        details.style.display = 'block';
        document.querySelector(".y-num").textContent = inputNum.value;
        document.querySelector(".c-num").textContent = randomNumber;
        
        if(inputNum.value === randomNumber){
            winCount++;
            document.querySelector(".win span").textContent = winCount;
        }else{
            loseCount++;
            document.querySelector(".lose span").textContent = loseCount;
        }
    }
});