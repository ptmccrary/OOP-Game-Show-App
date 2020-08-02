class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.resetGame();
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(Phrase);
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase('The secret of getting ahead is getting started'),
            new Phrase('Only the paranoid survive'),
            new Phrase('Its hard to beat a person who never gives up'),
            new Phrase('Do one thing everyday that scares you'),
            new Phrase('Impossible is just an opinion')
        ];
        
        return phrases;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];

        return phrase;
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {

        if(this.activePhrase.checkLetter(button) === false) {
            button.disabled = true;
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.disabled = true;
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button);
            this.checkForWin();
            if(this.checkForWin() === true) {
                this.gameOver();
            }
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heartsOl = document.querySelector('#scoreboard ol');
        let triesLi = heartsOl.querySelector('.tries');
        let heartImg = heartsOl.querySelector('.tries img');
        if(this.activePhrase.checkLetter(this.letter) === false) {
            this.missed++;
            heartImg.src = 'images/lostHeart.png';
            triesLi.className = 'fails';
        }
        if(this.missed > 4) {
            this.gameOver();
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        const hiddenLetter = document.getElementsByClassName('hide');
        if(hiddenLetter.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const gameOverMsg = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');
        
        if (this.checkForWin() === true) {
            overlay.className = 'win';
            overlay.style.display = 'flex';
            gameOverMsg.textContent = 'Congratulations, you WON!';
        } else {
            overlay.className = 'lose';
            overlay.style.display = 'flex';
            gameOverMsg.textContent = 'Better Luck next time :(';
        }
    }

    /**
     * Removes 'li' elements from phrase 'ul' element
     * Enables all onscreen keyboard buttons, updated to 'key' class
     * Resets all heart images to 'liveHeart.png'
     */
    resetGame() {
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';
        this.missed = 0;
        const buttons = document.getElementsByTagName('BUTTON');
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].className = 'key';
            buttons[i].disabled = false;
        }
        
        const heartsOl = document.querySelector('#scoreboard ol');
        let fails = heartsOl.querySelectorAll('.fails');
        for(let i = 0; i < fails.length; i++) {
            fails[i].className = 'tries';
        }

        let lives = heartsOl.querySelectorAll('.tries img');
        for(let i = 0; i < lives.length; i++){
            lives[i].src = 'images/liveHeart.png';
        }
    }
}