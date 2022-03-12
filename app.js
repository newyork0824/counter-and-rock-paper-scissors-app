//counter App
const counterEl = document.getElementById("counter-el")
const increaseCounterBtn = document.getElementById('increaseCounter-btn')
const decreaseCounterBtn = document.getElementById('decreaseCounter-btn')
let counterNum = 0
counterEl.textContent = counterNum

function render(counterNum){
counterEl.textContent = counterNum
if(counterNum < 0) {
counterEl.setAttribute("style", "color: red")
}
}

increaseCounterBtn.addEventListener("click", function(){
counterNum = counterNum + 1
counterEl.textContent = counterNum
if(counterNum < 0) {
counterEl.setAttribute("style", "color: red")
}else{
counterEl.setAttribute("style", "color: green")
}

})


decreaseCounterBtn.addEventListener("click", function(){
counterNum = counterNum - 1
counterEl.textContent = counterNum
if(counterNum < 0) {
counterEl.setAttribute("style", "color: red")
}else{
counterEl.setAttribute("style", "color: green")
}
})

//Rock Paper Scissors
rpsMessegeEl = document.getElementById("rpsMessege-el")
rpsUserMessegeEl = document.getElementById("rpsUserMessege-el")
rpsAiMessegeEl = document.getElementById("rpsAiMessege-el")
rockBtn = document.getElementById("rock-btn")
paperBtn = document.getElementById("paper-btn")
scissorsBtn = document.getElementById("scissors-btn")
userWinTotalEl = document.getElementById("userWinTotal-el")
aiWinTotalEl = document.getElementById("aiWinTotal-el")

let userChoice
let aiChoice
let userWinTotal = 0
let aiWinTotal = 0

userWinTotalEl.textContent = userWinTotal
aiWinTotalEl.textContent = aiWinTotal

rockBtn.addEventListener("click", function(){
rpsUserMessegeEl.textContent = "Rock"
userChoice = "Rock"
aiTurn()
})

paperBtn.addEventListener("click", function(){
rpsUserMessegeEl.textContent = "Paper"
userChoice = "Paper"
aiTurn()
})

scissorsBtn.addEventListener("click", function(){
rpsUserMessegeEl.textContent = "Scissors"
userChoice = "Scissors"
aiTurn()
})

function aiTurn(){
let randomNum = Math.floor(Math.random() * 3) + 1

switch(randomNum) {
case 1: 
aiChoice = "Rock"
rpsAiMessegeEl.textContent = "Rock"
break
case 2:
aiChoice = "Paper"
rpsAiMessegeEl.textContent = "Paper"
break
case 3:
aiChoice = "Scissors"
rpsAiMessegeEl.textContent = "Scissors"
}
declareRPSWinner()
}

function declareRPSWinner(){
if(userChoice === "Rock" && aiChoice === "Rock") {
rpsMessegeEl.textContent = "It's a Tie!"
}else if(userChoice === "Rock" && aiChoice === "Scissors"){
rpsMessegeEl.textContent = "User Has Won!!"
userWins()
}else if(userChoice === "Rock" && aiChoice === "Paper") {
rpsMessegeEl.textContent = "Ai Has Won"
aiWins()

}else if(userChoice === "Paper" && aiChoice === "Paper") {
rpsMessegeEl.textContent = "It's a Tie!"
}else if(userChoice === "Paper" && aiChoice === "Rock") {
rpsMessegeEl.textContent = "User Has Won!!"
userWins()
}else if(userChoice === "Paper" && aiChoice === "Scissors") {
rpsMessegeEl.textContent = "AI Has Won"
aiWins()

}else if(userChoice === "Scissors" && aiChoice === "Scissors") {
rpsMessegeEl.textContent = "It's a Tie!"
}else if(userChoice === "Scissors" && aiChoice === "Paper") {
rpsMessegeEl.textContent = "User Has Won!!"
userWins()
}else if(userChoice === "Scissors" && aiChoice === "Rock") {
rpsMessegeEl.textContent = "AI has Won"
aiWins()
}
}

function userWins() {
userWinTotal = userWinTotal + 1
userWinTotalEl.textContent = userWinTotal
}

function aiWins(){
aiWinTotal = aiWinTotal + 1
aiWinTotalEl.textContent = aiWinTotal
}




