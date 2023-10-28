
var myQuestions = [
  {
    question:"If you need to perform an action on a set of data multiple times, you would use _______.",
    answers:["an if statement", "a for loop","a variable", "a function"],
    correct:"a for loop"
  },
  {
    question:"What is the opposite of the strict equality operator (===)?",
    answers:["==", "---","!==", "!!!"],
    correct:"!=="
  }
]

var index = 0

var startContainer = document.querySelector(".start-container")
var quizContainer = document.querySelector(".quiz-container")
var inputForm = document.querySelector(".input-form")
var ol = document.getElementById("answer-buttons")

var startBtn = document.getElementById("start-btn") 

startBtn.addEventListener("click", function startQuiz() {
 
  console.log("working")
   if (index == myQuestions.length) { //end quiz is called here if index is equal to myQuestions.length
     endQuiz();
   };

   startContainer.classList.add("hide")
   quizContainer.classList.replace("hide","show")

   for (var i = 0; i < myQuestions.length; i++) {  //plug in the question using textContent
     var question = document.getElementById("question");
     question.textContent = myQuestions[index].question;
    };

    for (var x = 0; x < myQuestions[index].answers.length; x++) {  //for loop to iterate through answer array inside myQuestion array 
      var li = document.createElement("li"); //inside the for loop you create the element li, then the element of button
      var button = document.createElement("button");
      li.appendChild(button);
      ol.appendChild(li); 
      button.textContent = myQuestions[index].answers[x];
    };
});

var timerEl = document.getElementById("timer");

var timeLeft = 10;
var timeInterval = 0

startBtn.addEventListener("click", function startTimer(){
  timeInterval = setInterval(function() {
    if (timeLeft >= 1) {
      timerEl.textContent = `Seconds Remaining: ${timeLeft}`;
      timeLeft--;
    } else { 
      endQuiz();
    };
  }, 1000);
}); 

function checkAnswer(answer){
//in this function you will create an if statement comparing the answer to the correct property of myQuestions
//if it is true (meaning the answer is correct)
//then index goes up - index++
//score goes up - score ++ (declare score globally)
//and you call function startQuiz here

//else index goes up
//time loses 5 seconds
}

function endQuiz() { 
  clearInterval(timeInterval);
  timerEl.textContent = '';
  quizContainer.classList.replace("show", "hide");
  inputForm.classList.replace("hide", "show");
};

function storage(){
  //in this function you will get the value of the input
  //if input is not empty - input !==""
  //inside this if you will first and foremost get items from localStorage into a avriable that holds array you will create
  //second create an object that will take initials and score
  //third push object into the same array you created to get items from localStorage
  //fourth you will set this array into localstorage
  //fith you will assign the page to the highScore page - window.location.assign("score.html")
}

//ADDEVENLISTENER

// first is the start button - inside you will call startquiz and startTimer

// second the ol - where you will use this.event.target.textContent inside a variable
//you will call checkAnswer here and pass the variable with this.event.target.textContent to this function.

//the third event will be for the submit btn for input form. In here you only call storage function
