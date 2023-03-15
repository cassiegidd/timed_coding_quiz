var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#count-down");
var timeLeft = 60; //do i need this in the global and do i need to pass this value in the global variable?
var questions = document.querySelector(".questions")



startBtn.addEventListener("click", function () {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft ===0) {
            clearInterval(timerInterval);
        }    
    }, 1000);
    startBtn.style.visibility = "hidden";
})

const questionOptions = {
    question1: "An array...",
    question2: "Which data type returns a true/false value?"
}

startBtn.addEventListener("click", function () {
    questions.textContent = questionOptions.question1;
})



