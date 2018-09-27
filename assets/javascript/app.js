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
  question : "What is Bart's twin's name?",
  answers : ["Hugo","Al","Gomer","John Jacob Jingleheimer Schmidt"],
  correct : 0
}
var time = 1500;
var interval = "";
var questionArray = [trivia1, trivia2, trivia3, trivia4, trivia5, trivia6];
var currentQuestion = -1;
var answerArray = ["answer1","answer2","answer3","answer4"];
var answerLetters = ["A","B","C","D"]
var buttonBeenClicked = false
var correctGuesses = 0
var wrongGuesses = 0
var score = 0
var timeOut = ""
var final = ""
var doh = new Audio("./assets/sounds/doh.mp3")
var dohdoh = new Audio("./assets/sounds/dohdoh.mp3")
var start = new Audio("./assets/sounds/damned.mp3")
var buzzer = new Audio("./assets/sounds/buzzer.mp3")
var ticktock = new Audio("./assets/sounds/ticktock.mp3")


$(".start").on("click",function() {
  newQuestion()
  start.play()
})

function newQuestion(){
  buttonBeenClicked = false
  currentQuestion += 1
  time = 150;
  timesmaller = 10;
  interval = setInterval(count, 100);
  var newTrivia = $("<div>");
  $(".temp").remove()
  $(".minheader").empty()
  newTrivia.append("<h2>"+questionArray[currentQuestion].question+"</h2>")
  newTrivia.addClass("col-md-12 question text-center temp")
  $(".minheader").append(newTrivia)

for (i in answerArray){
    var currentanswer = answerArray[i]
    var answer = $("<div>")
    var button = $("<div>")
    var answerText = $("<div>")
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
  $(".btn").on("click",function(){
    if (buttonBeenClicked == false){
    var value = $(this).val()
    if (value == questionArray[currentQuestion].correct){
      var winnerdiv = $("<div>")
      var winnertext = $("<div>")
      winnerdiv.addClass("loser row mt-5 temp")
      winnertext.addClass("col-md-12 bg-success")
      winnertext.append("<h1>Correct!</h1>")
      winnerdiv.append(winnertext)
      $(".main").append(winnerdiv)
      clearInterval(interval)
      correctGuesses +=1
      score += time
      dohdoh.play()
      timeOut = setTimeout(newQuestion,3000)
      final = setTimeout(finalScreen,1000)
    }
    else {
      clearInterval(interval)
      var loserdiv = $("<div>")
      var losertext = $("<div>")
      loserdiv.addClass("loser row mt-5 temp")
      losertext.addClass("col-md-12 bg-warning")
      losertext.append("<h1>Incorrect!</h1>")
      loserdiv.append(losertext)
      $(".main").append(loserdiv)
      doh.play()
      wrongGuesses += 1
      score -= time
      timeOut = setTimeout(newQuestion,3000)
      final = setTimeout(finalScreen,1000)
    }

  }
    buttonBeenClicked = true
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
  if(time <= 60){
    ticktock.play()
  }
  $(".timer").text("Time left to Guess: "+firstnumber+"."+secondnumber)
   if (time == 0){
    clearInterval(interval)
    var loserdiv = $("<div>")
    var losertext = $("<div>")
    loserdiv.addClass("loser row mt-5 temp")
    losertext.addClass("col-md-12 bg-warning")
    losertext.append("<h1>You have run out of time!</h1>")
    loserdiv.append(losertext)
    $(".main").append(loserdiv)
    wrongGuesses += 1
    timeOut = setTimeout(newQuestion,3000)
    final = setTimeout(finalScreen,2500)
    buzzer.play()

  }
}


function finalScreen(){
  if (currentQuestion == questionArray.length-1) {
    clearInterval(interval)
    clearTimeout(timeOut)
  var finalDiv = $("<div>")
  finalDiv.append("<h1>Score: "+score+"</h1>")
  finalDiv.append("<h1>Correct Guesses: "+correctGuesses+"</h1>")
  finalDiv.append("<h1>Wrong Guesses: "+wrongGuesses+"</h1>")
  $('.main').append(finalDiv)
  $(".temp").remove()
  $(".timer").text("Time left to Guess: 0")
}
}







})
