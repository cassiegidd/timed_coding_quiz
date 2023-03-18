var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#count-down");
var timeLeft = 60; //do i need this in the global and do i need to pass this value in the global variable?
var fieldset1 = document.querySelector("#fieldset1");
var questions = document.querySelector(".questions");
var labelOne = document.querySelector("#option-one");
var labelTwo = document.querySelector("#option-two");
var labelThree = document.querySelector("#option-three");
var labelFour = document.querySelector("#option-four");
const questionOptions = {
    question1: "An array...",
    question2: "Which data type returns a true/false value?"
}

startBtn.addEventListener("click", function () {
    fieldset1.removeAttribute("hidden");
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft ===0) {
            clearInterval(timerInterval);
        }    
    }, 1000);
    startBtn.style.visibility = "hidden";
})




