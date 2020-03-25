//// <reference path="player.ts" />
//// <reference path="game.ts" />
import {Player} from './player';
import {Game} from './game';
import * as helpers from './utility';


let newGame: Game;
 
//add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click',()=>{
    const player:Player=new Player();
    player.name=helpers.getvalue('playername');
    
    const problemCount:number=Number(helpers.getvalue('problemCount'));
    const factor:number=Number(helpers.getvalue('factor'));

    newGame=new Game(player,problemCount,factor);
    newGame.displayGame();
});

//add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click',()=>{
    newGame.calculateScore();
});