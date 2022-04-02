let counterSession = 1;
let counterQuestion = 0;
let answerCheck = document.querySelector("span")
let numberContainer = document.createElement("div")
numberContainer.classList.add("numberContainer")
var req = new XMLHttpRequest();
req.open("GET", "data.json");
req.onload = function () {
  let data = JSON.parse(req.responseText);
  let next = document.getElementById("next");
    let ans1 = document.querySelector(".ans1");
    let ans2 = document.querySelector(".ans2");
    let ans3 = document.querySelector(".ans3");
    let ans4 = document.querySelector(".ans4");
    let question = document.querySelector(".question");
      question.innerHTML = data[counterQuestion].question;
      ans1.innerHTML = data[counterQuestion].answer_1;
      ans2.innerHTML = data[counterQuestion].answer_2;
      ans3.innerHTML = data[counterQuestion].answer_3;
      ans4.innerHTML = data[counterQuestion].answer_4;
  for (i = 0; i < data.length; i++) {
    let questionNumber = document.createElement("div")
    questionNumber.innerHTML = i+1
    questionNumber.classList.add("questionNumber")
    let questionAll = document.querySelectorAll(".questionNumber");
    questionNumber.setAttribute("id" , i+1)
    
    document.body.prepend(numberContainer)
    numberContainer.append(questionNumber)
    
    sessionStorage.setItem(i + 1, "");
    
    next.onclick = function () {
      if (counterQuestion === 3){
        next.innerHTML = "Go to english quiz"
        
      }else if(counterQuestion === 8){
        next.innerHTML = "Go to Technical quiz"
      }else{
        next.innerHTML = "Next"
      }
      if (sessionStorage.getItem(counterSession) !== ""){
        answerCheck.style.display = "none"
        questionAll[counterQuestion].classList.toggle("active")
        counterQuestion++;
        counterSession++
      }else{
        answerCheck.style.display = "inline"
      }
      question.innerHTML = data[counterQuestion].question;
      ans1.innerHTML = data[counterQuestion].answer_1;
      ans2.innerHTML = data[counterQuestion].answer_2;
      ans3.innerHTML = data[counterQuestion].answer_3;
      ans4.innerHTML = data[counterQuestion].answer_4;
      
    };
  }
};

req.send();

let answers = document.getElementsByClassName("ans");

setTimeout(getAnswers, 3000);
function getAnswers() {
  for (i = 0; i < answers.length; i++) {
    answers[i].onclick = function () {
      sessionStorage.setItem(counterSession, this.innerHTML);
    };
  }
}
