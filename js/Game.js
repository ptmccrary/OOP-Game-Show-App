class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    startGame(){

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
        ]
        return phrases;
    };

    getRandomPhrase(){

    }

    handleInteraction(){

    }

    removeLife(){

    }

    checkForWin(){

    }

    gameOver(){

    }
}