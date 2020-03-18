function startGame(){
    //starting a new game
var messagesElement = document.getElementById('messages');
messagesElement!.innerHTML='welcome to multimath!!! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click',startGame);