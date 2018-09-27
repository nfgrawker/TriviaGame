$(document).ready(function(){
var trivia1 = {
  question : "How old is Mr Burns?",
  answer1 : "81",
  answer2 : "104",
  answer3 : "76",
  answer4 : "88",
  correct : 2
}
var trivia2 = {
  question : "How old is Bart?",
  answer1 : "11",
  answer2 : "9",
  answer3 : "14",
  answer4 : "10",
  correct : 4
}
var trivia3 = {
  question : "How old is Lisa?",
  answer1 : "8",
  answer2 : "9",
  answer3 : "10",
  answer4 : "11",
  correct : 1
}
var trivia4 = {
  question : "In the Episode 'Das Bus' who does it say rescued the children?",
  answer1 : "Otto",
  answer2 : "Barney",
  answer3 : "Homer",
  answer4 : "Moe",
  correct : 4
}
var trivia5 = {
  question : "Where did Homer put his gun after Marge caught him with it?",
  answer1 : "Bart's Treehouse",
  answer2 : "In the Fridge",
  answer3 : "At Moe's Tavern",
  answer4 : "Under the couch cushion",
  correct : 2

}
var trivia6 = {
  question : "What is Barts twin called?",
  answer1 : "Hugo",
  answer2 : "Al",
  answer3 : "Gomer",
  answer4 : "John Jacob Jingleheimer Schmidt",
  correct : 1
}
var time = 300;
var interval = "";
var questionArray = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6];
var currentQuestion = 0;
var answerArray = ["answer1","answer2","answer3","answer4"];

$(".start").on("click",function() {
  newQuestion()
})

function newQuestion(){
  time = 300;
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
    button.append('<button class="btn btn-info" type="button" name="button">Answer A</button>')
    answerText.addClass("col-md-9 temp")
    answerText.val("answer"+i)
    answerText.append("<h4>- - - - - - - - -"+questionArray[currentQuestion][currentanswer]+"</h4>")
    answer.append(button)
    answer.append(answerText)
    $(".main").append(answer)
  }



  }


function count(){
  time -=1
}










})
