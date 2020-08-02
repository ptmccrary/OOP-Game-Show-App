let game;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
})

document.addEventListener('keydown', (e) => {
    game.handleInteraction(e.key);
})