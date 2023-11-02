//quiz questions

var myQuestions = [
  {
    question:"If you need to perform an action on a set of data multiple times, you would use _______.",
    answers:["an if statement", "a for loop","a variable", "a function"],
    right:"a for loop",
    last: false
  },
  {
    question:"What is the opposite of the strict equality operator (===)?",
    answers:["==", "---","!==", "!!!"],
    right:"!==",
    last: true
  }
];

let index = 0;

//reference html elements
var startContainer = document.querySelector(".start-container");
var quizContainer = document.querySelector(".quiz-container");
var inputForm = document.querySelector(".input-form");
var ol = document.getElementById("answer-buttons");
var startBtn = document.getElementById("start-btn");
var feedbackContainer = document.getElementById("feedback");

function startQuiz() {
 
  console.log(index)


   startContainer.classList.add("hide")
   quizContainer.classList.replace("hide","show")
  //plug in the question using textContent
     var screenQuestion = document.getElementById("question");
     screenQuestion.textContent = myQuestions[index].question;


      for (var x = 0; x < myQuestions[index].answers.length; x++) {  //for loop to iterate through answer array inside myQuestion array 
      var li = document.createElement("li"); //inside the for loop you create the element li, then the element of button
      var button = document.createElement("button");
      li.appendChild(button);
      ol.appendChild(li); 
      button.textContent = myQuestions[index].answers[x];
      };

      ol.addEventListener("click", checkAnswer);
      
      function checkAnswer() {
        if (myQuestions[index].answers === myQuestions[index].right) {
          feedbackContainer.textContent = `Score: ${score} - Correct!`;
          score++;
          nextQuestion();
        } else {
          feedbackContainer.textContent = `Score: ${score} - Incorrect`;
          timeLeft -= 5;
          nextQuestion();
        };
      };

      function nextQuestion() {
        if (myQuestions[index].last === true) {
          endQuiz();
        } else {   
        index++;
        console.log(index)
        screenQuestion.textContent = myQuestions[index].question;
        };
      };
};
//start quiz when start button is clicked
startBtn.addEventListener("click", startQuiz);


var timerEl = document.getElementById("timer");
var timeLeft = 100;
var timeInterval = 0;

//start timer when start button is clicked
startBtn.addEventListener("click", function startTimer() {
  timeInterval = setInterval(function() {
    if (timeLeft >= 1) {
      timerEl.textContent = `Seconds Remaining: ${timeLeft}`;
      timeLeft--;
    } else { 
      endQuiz();
    };
  }, 1000);
}); 

var score = 0;

//check if the correct answer was selected 

//   var tgt = e.target.textContent; 

//   console.log(e.target.textContent);
//  if (tgt === myQuestions[index].right) { //in this function you will create an if statement comparing the answer to the correct property of myQuestions
//    index++;
//    score++;
//    startQuiz
//  } else {
//    index++;
//    console.log(index)
//    timeLeft -= 5; 
//    startQuiz
//  };
// };

//end quiz
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
