var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#count-down");
var timeLeft = 60; //do i need this in the global and do i need to pass this value in the global variable?
var fieldset1 = document.querySelector("#fieldset1");
var fieldset2 = document.querySelector("#fieldset2");
var submitBtn1 = document.querySelector("#submit-button-one");
var answer1 = document.querySelector("input[id=q1a4]");//creating a variable witht the value of the CORRECT answer for question one
var answer2 = document.querySelector("input[id=q2a2]");//creating a variable with the value of the CORRECT answer for question two 
var submitBtn2 = document.querySelector("#submit-button-two");
// at the click of the START button, this function will create and start a timer countdown and make visible the first question form
startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "hidden";
    fieldset1.removeAttribute("hidden");
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft ===0) {
            clearInterval(timerInterval);
        }    
    }, 1000);
})

// at the click of the SUBMIT button, this function will check if the checked option has a value of true/false (no value=false) and will subtract time from timer if value returns false
submitBtn1.addEventListener("click", function () {
    fieldset1.hidden = true;
    fieldset2.removeAttribute("hidden");
    if (answer1.checked===false) {
        console.log(answer1.value);
        timeLeft--;
        timeLeft--;
    }
})
submitBtn2.addEventListener("click", function () {
    fieldset2.hidden = true;
    if (answer2.checked===false) {
        console.log(answer2.value);
        timeLeft--;
        timeLeft--;  
    }
})





