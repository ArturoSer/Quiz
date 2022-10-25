var quizTimerEl = document.querySelector("#timer");
var beginEl = document.querySelector("#begin-button");
var questionBoxEl = document.querySelector("#container");
var finalScoreEl = document.querySelector("#finalscore");
var resultsEl = document.querySelector("#results");
var highscoreEl = document.querySelector("#highscores");
var questionboxEl = document.querySelector("#container");
var 
 var current = 0;
 var timeLeft = 0;
 var timeInterval = "";

 scoreList = [];

 var questions = [
    {
        question: "what is wrong with the world",
        options: [""],
        correctAnswer:""
    },
    {
        question: "",
        options: [""],
        correctAnswer:""
    },
    {
        question: "",
        options: [""],
        correctAnswer:""
    },
    {
        question: "",
        options: [""],
        correctAnswer:""
    }
 ]

 beginEl.addEventListener("click", beginQuiz)
 questionBoxEl.addEventListener("click", answerQuestion)
 finalScoreEl.addEventListener("click", submitScore)

 function beginQuiz (event){
    if(event.target.matches("#beginQuiz")) {
        beginEl.style.display = "none";
        questionBoxEl.style.display = "flex";
        current = 0;
        countdown();
        displayQuestion();
    }
 }

 function displayQuestion () {
    questionBoxEl.innerHTML = ('
    <><div id="submitbutton" class="begin-button" data-answer="${questions[current].options[0]}">${questions[current].options[0]}</div><div id="submitbutton" class="begin-button" data-answer="${questions[current].options[1]}">${questions[current].options[1]}</div><div id="submitbutton" class="begin-button" data-answer="${questions[current].options[2]}">${questions[current].options[2]}</div><div id="submitbutton" class="begin-button" data-answer="${questions[current].options[3]}">${questions[current].options[3]}</div></></>
    )
 }
