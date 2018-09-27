$(document).ready(function(){
var trivia1 = {
  question : "How old is Mr Burns?",
  answers : ["81","104","76","88"],
  correct : 1
}
var trivia2 = {
  question : "How old is Bart?",
  answers : ["11","9","14","10"],
  correct : 3
}
var trivia3 = {
  question : "How old is Lisa?",
  answers : ["8","9","10","11"],
  correct : 0
}
var trivia4 = {
  question : "In the Episode 'Das Bus' who does it say rescued the children?",
  answers : ["Otto","Barney","Homer","Moe"],
  correct : 3
}
var trivia5 = {
  question : "Where did Homer put his gun after Marge caught him with it?",
  answers : ["Bart's Treehouse","In the Fridge","At Moe's Tavern","Under the couch cushion"],
  correct : 1

}
var trivia6 = {
  question : "What is Barts twin called?",
  answers : ["Hugo","Al","Gomer","John Jacob Jingleheimer Schmidt"],
  correct : 0
}
var time = 300;
var interval = "";
var questionArray = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6];
var currentQuestion = 0;
var answerArray = ["answer1","answer2","answer3","answer4"];
var answerLetters = ["A","B","C","D"]

$(".start").on("click",function() {
  newQuestion()
})

function newQuestion(){
  time = 300;
  timesmaller = 10;
  interval = setInterval(count, 100);
  var newTrivia = $("<div>");

  $(".minheader").empty()
  newTrivia.append("<h2>"+questionArray[currentQuestion].question+"</h2>")
  newTrivia.addClass("col-md-12 question text-center temp")
  $(".minheader").append(newTrivia)

for (i in answerArray){
    var currentanswer = answerArray[i]
    var answer = $("<div>")
    var button = $("<div>")
    var answerText = $("<div>")
    console.log(questionArray[currentQuestion])
    answer.addClass("row mt-1 temp")
    button.addClass("col-md-3 button temp")
    button.append('<button class="btn btn-info" value ="'+i+'" type="button" name="button">Answer '+answerLetters[i]+'</button>')
    answerText.addClass("col-md-9 temp")
    answerText.val("answer"+i)
    answerText.append("<h4>- - - - - - - - -"+questionArray[currentQuestion].answers[i]+"</h4>")
    answer.append(button)
    answer.append(answerText)
    $(".main").append(answer)
  }
  $("btn").on("click",function(){
    var value = $(this).val()
    if (value == questionArray[currentQuestion].correct){

    }
    else 
  })

  }


function count(){
  time -=1
  timesmaller -= 1
  firstnumber = Math.floor(time/10)
  secondnumber = timesmaller
  if (timesmaller < 1){
    timesmaller = 10
  }

  $(".timer").text(firstnumber+"."+secondnumber)
}










})
