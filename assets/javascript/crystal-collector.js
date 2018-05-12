var goalNumber = Math.floor((Math.random() * 102) + 19);
var diamondValue = (Math.floor(Math.random() * 11) + 1);
var redstoneValue = (Math.floor(Math.random() * 11) + 1);
var goldValue = (Math.floor(Math.random() * 11) + 1);
var emeraldValue = (Math.floor(Math.random() * 11) + 1);
var wins = 0;
var losses = 0;
var userPoints = 0;

function updateGoalNumber(){
    $(".goal-number").text("The Goal Number is: " + goalNumber);
}
function updatePoints() {
    $(".your-points-are").text("Your current score is: " + userPoints);
}
function updateWins() {
    $(".wins").text("Wins: " + wins);
}
function updateLosses(){
$(".losses").text("Losses: " + losses);
}

function resetGame(){
    goalNumber = (Math.floor(Math.random() * 102) + 19);
    diamondValue = (Math.floor(Math.random() * 11) + 1);
    redstoneValue = (Math.floor(Math.random() * 11) + 1);
    goldValue = (Math.floor(Math.random() * 11) + 1);
    emeraldValue = (Math.floor(Math.random() * 11) + 1);
    userPoints = 0;
    updateGoalNumber();
    updatePoints();

}

function pointsChecking(number){
    if(userPoints === goalNumber){
        updatePoints();
        wins++
        alert("WINNER!!!");
        updateWins();
        resetGame();
        
    }else if(userPoints > goalNumber){
        updatePoints();
        losses++;
        alert("YOU LOSE!!!");
        updateLosses();
        resetGame();
    }
}

//load initial values to html
updateGoalNumber();
updatePoints();
updateWins();
updateLosses();

//when diamond clicked
$(".diamond").on("click", function(){
    userPoints = (userPoints + diamondValue);
    updatePoints();
    pointsChecking();
})

//when redstone clicked
$(".redstone").on("click", function(){
    userPoints = (userPoints + redstoneValue);
    updatePoints();
    pointsChecking(userPoints);
})

//when gold clicked
$(".gold").on("click", function(){
    userPoints = (userPoints + goldValue);
    updatePoints();  
    pointsChecking(userPoints); 
})

//when emeral clicked
$(".emerald").on("click", function(){
    userPoints = (userPoints + emeraldValue);
    updatePoints();  
    pointsChecking(userPoints); 
})



