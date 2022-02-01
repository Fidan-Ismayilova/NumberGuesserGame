
$(".btn").on("click", function(){

var compChoice = Math.floor(Math.random()*4 + 1);
console.log("computer choice is " + compChoice);
$(".card-text").text(compChoice);


var userChoice = $(this).val();
console.log("user choice is " + userChoice);


if (userChoice == compChoice){
    $("#result").text("HELL YEAH! You won! Click and play again!");
}else {
    $("#result").text("Noo:(( Try again!");
}


})

