/// <reference path="player.ts"/>
/// <reference path="utility.ts" />


//
function startGame(){
     //starting a new game
                                                     //id-from-html
    let playerName: string | undefined = getInputValue('playername');//save the name in the playername variable through the getInputValue method

    logplayer(playerName);

    postscore(80,playerName);
    postscore(-5,playerName);


  
//  var messagesElement = document.getElementById('messages');
//messagesElement!.innerHTML='welcome to multimath!!! Starting new game...';
}

//////prints the name in console, in case of not assigning a name it will take as default the q it is passed by parameter
function logplayer (name:string ='GAME-PLAYER'): void{  
    console.log(`new game starting for player: ${name}`);
}

//we keep the name that we pass in the html, it can be empty
function getInputValue(elementID:string): string | undefined  { 

 const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

if(inputElement.value===""){
    return undefined;
}
else{
    return inputElement.value;
 }
}

//prints the player's score and name on the screen, in case the name field
////// is empty it prints by default the one with the parameter
function postscore(score: number, playerName: string="Multimath player"): void {

let logger:(value: string) => void;

if(score<0){
    logger=logError;
}
else{
    logger=logMessage;
}

const scoreElement: HTMLElement| null= document.getElementById('postedScores');
    scoreElement!.innerText=`${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);

/*function logMessage(message: string): void {
  console.log(message);
}*/
const logMessage = (message: string): void => console.log(message);
//logMessage("Welcome to MUlTiMaTh..");

function logError(error:string):void{
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

const firstPlayer:Player=new Player();
firstPlayer.name="slayer";
console.log(firstPlayer.formatName());



