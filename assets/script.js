var startBtn = document.querySelector("#start-button");
var timer = document.querySelector("#count-down");
var timeLeft = 60; 
var quizEnd = false;
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
var wrong = document.createElement("p");
var correct = document.createElement("p");
var gameOver = document.querySelector("#game-over");
var quiz = document.querySelector("#quiz-content");
var initialsInputDiv = document.querySelector("#initials-input");
var initialsInput = document.querySelector("#initials");
var scoresList = document.querySelector("#scores-list");
var scoreHistory = [];
var score = 0;

// at the click of the START button, this function will create and start a timer countdown and make visible the first question form
startBtn.addEventListener("click", function () {
    startBtn.style.visibility = "hidden";
    quiz.removeAttribute("hidden");
    fieldset1.removeAttribute("hidden");
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;
        if(timeLeft === 0 || quizEnd) {
            clearInterval(timerInterval);
            initialsInputDiv.removeAttribute("hidden");
            gameOver.removeAttribute("hidden");
            quiz.hidden = true;
               
        }    
    }, 1000);
})

// at the click of the SUBMIT button, this function will check if the checked option has a value of true/false (no value=false) and will subtract time from timer if value returns false
submitBtn1.addEventListener("click", function () {
    fieldset1.hidden = true;
    fieldset2.removeAttribute("hidden");
    if (document.getElementById("q1a4").checked===false) {  
        console.log("test");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset2.appendChild(wrong);
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset2.appendChild(correct);
    }  
})
// at the click of each submit button (one submit button for each question), a function will hide the current form and bring forward the next form
submitBtn2.addEventListener("click", function () {
    fieldset2.hidden = true;
    fieldset3.removeAttribute("hidden");
    if (document.getElementById("q2a2").checked===false) {
        console.log("test2");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset3.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset3.appendChild(correct);
    }
})
submitBtn3.addEventListener("click", function () {
    fieldset3.hidden = true;
    fieldset4.removeAttribute("hidden");
    if (document.getElementById("q3a1").checked===false) {
        console.log("test3");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset4.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset4.appendChild(correct); 
    }
})
submitBtn4.addEventListener("click", function () {
    fieldset4.hidden = true;
    fieldset5.removeAttribute("hidden");
    if (document.getElementById("q4a3").checked===false) {
        console.log("test4");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset5.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset5.appendChild(correct);  
    }
})
submitBtn5.addEventListener("click", function () {
    fieldset5.hidden = true;
    fieldset6.removeAttribute("hidden");
    if (document.getElementById("q5a3").checked===false) {
        console.log("test5");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset6.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset6.appendChild(correct);  
    }
})
submitBtn6.addEventListener("click", function () {
    fieldset6.hidden = true;
    fieldset7.removeAttribute("hidden");
    if (document.getElementById("q6a1").checked===false) {
        console.log("test6");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        fieldset7.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        fieldset7.appendChild(correct);
    }
})
submitBtn7.addEventListener("click", function () {
    if (document.getElementById("q7a4").checked===false) {
        console.log("test7");
        timeLeft-=3;
        wrong.innerHTML="WRONG!";
        wrong.classList.add("wrong-class");
        quiz.appendChild(wrong); 
    } else {
        correct.innerHTML="CORRECT!";
        correct.classList.add("correct-class");
        quiz.appendChild(correct);
    }
    //when quiz end is true, the timer interval will stop
    quizEnd = true;

    score = timeLeft;

    document.querySelector(".score").innerText = "Your score is " + (timeLeft-1);
    gameOver.removeAttribute("hidden");
});
// function to save initials and score to local storage
function saveInitials(event) {
    event.preventDefault();
    var highScores = JSON.parse(localStorage.getItem("high-scores") )|| [];
    console.log(highScores);
    var newScore = {
        score: (score -1),
        intials: initialsInput.value,
    }
    console.log(newScore);
    highScores.push(newScore);
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    getHighScores();
};
// function to get saved high scores from local storage and display them on page
function getHighScores() {
    var highScores = JSON.parse(localStorage.getItem("high-scores")) || [];
    console.log(highScores);
    for (i=0; i<highScores.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = highScores[i].intials + " = " + highScores[i].score;
        scoresList.appendChild(li);
    };    
    initialsInputDiv.hidden = true;
};
getHighScores();

initialsInputDiv.addEventListener("submit", saveInitials);