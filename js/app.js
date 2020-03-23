//
function startGame() {
    //starting a new game
    //id-from-html
    var playerName = getInputValue('playername'); //save the name in the playername variable through the getInputValue method
    logplayer(playerName);
    postscore(80, playerName);
    postscore(-5, playerName);
    //  var messagesElement = document.getElementById('messages');
    //messagesElement!.innerHTML='welcome to multimath!!! Starting new game...';
}
//prints the name in console, in case of not assigning a name it will take as default the q it is passed by parameter
function logplayer(name) {
    if (name === void 0) { name = 'GAME-PLAYER'; }
    console.log("new game starting for player: " + name);
}
//we keep the name that we pass in the html, it can be empty
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === "") {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
//prints the player's score and name on the screen, in case the name field
// is empty it prints by default the one with the parameter
function postscore(score, playerName) {
    if (playerName === void 0) { playerName = "Multimath player"; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
    logger("Score: " + score);
}
document.getElementById('startGame').addEventListener('click', startGame);
/*function logMessage(message: string): void {
  console.log(message);
}*/
var logMessage = function (message) { return console.log(message); };
//logMessage("Welcome to MUlTiMaTh..");
function logError(error) {
    console.error(error);
}
/*
let myResult: Result={
    playerName:"JoseMAnuel",
    score:20,
    problemCount:5,
    factor:7,
};

let player1: Person = {
    name:"JoseMAnuel",
   formatName: ()=>"JSUS",
};
*/
var firstPlayer = new Player();
firstPlayer.name = "slayer";
console.log(firstPlayer.name);
