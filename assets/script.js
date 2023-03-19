var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#count-down");
var timeLeft = 60; //do i need this in the global and do i need to pass this value in the global variable?
var fieldset1 = document.querySelector("#fieldset1");
var fieldset2 = document.querySelector("#fieldset2");
var fieldset3 = document.querySelector("#fieldset3");
var fieldset4 = document.querySelector("#fieldset4");
var fieldset5 = document.querySelector("#fieldset5");
var fieldset6 = document.querySelector("#fieldset6");
var fieldset7 = document.querySelector("#fieldset7");
var submitBtn1 = document.querySelector("#submit-button-one");
var submitBtn2 = document.querySelector("#submit-button-two");
var submitBtn3 = document.querySelector("#submit-button-three");
var submitBtn4 = document.querySelector("#submit-button-four");
var submitBtn5 = document.querySelector("#submit-button-five");
var submitBtn6 = document.querySelector("#submit-button-six");
var submitBtn7 = document.querySelector("#submit-button-seven");
// var answer1 = document.querySelector("input[name=answer1]");
// var answer2 = document.querySelector("input[name=answer2]");
// var answer3 = document.querySelector("input[name=answer3]");
// var answer4 = document.querySelector("input[name=answer4]");
// var answer5 = document.querySelector("input[name=answer5]");
// var answer6 = document.querySelector("input[name=answer6]");
// var answer7 = document.querySelector("input[name=answer7]"); 

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
    if (document.getElementById("q1a4").checked===false) {  
        console.log("test");
        timeLeft--;
        timeLeft--;
    }   
})
submitBtn2.addEventListener("click", function () {
    fieldset2.hidden = true;
    fieldset3.removeAttribute("hidden");
    if (document.getElementById("q2a2").checked===false) {
        console.log("test2");
        timeLeft--;
        timeLeft--;  
    }
})
submitBtn3.addEventListener("click", function () {
    fieldset3.hidden = true;
    fieldset4.removeAttribute("hidden");
    if (document.getElementById("q3a1").checked===false) {
        console.log("test3");
        timeLeft--;
        timeLeft--;  
    }
})
submitBtn4.addEventListener("click", function () {
    fieldset4.hidden = true;
    fieldset5.removeAttribute("hidden");
    if (document.getElementById("q4a3").checked===false) {
        console.log("test4");
        timeLeft--;
        timeLeft--;  
    }
})
submitBtn5.addEventListener("click", function () {
    fieldset5.hidden = true;
    fieldset6.removeAttribute("hidden");
    if (document.getElementById("q5a3").checked===false) {
        console.log("test5");
        timeLeft--;
        timeLeft--;  
    }
})
submitBtn6.addEventListener("click", function () {
    fieldset6.hidden = true;
    fieldset7.removeAttribute("hidden");
    if (document.getElementById("q6a1").checked===false) {
        console.log("test6");
        timeLeft--;
        timeLeft--;  
    }
})
submitBtn7.addEventListener("click", function () {
    if (document.getElementById("q7a4").checked===false) {
        console.log("test7");
        timeLeft--;
        timeLeft--;
    }
})





