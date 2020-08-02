let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});
const keyboard = document.getElementById('qwerty');
keyboard.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

document.addEventListener('keydown', (e) => {
    const keypress = e.key;
    const virtualKeys = keyboard.getElementsByClassName('key');
    for(let i = 0; i < virtualKeys.length; i++){
        if(virtualKeys[i].textContent === keypress) {
            game.handleInteraction(virtualKeys[i]);
        }
    }
});