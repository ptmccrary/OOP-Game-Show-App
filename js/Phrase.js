class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase(phrase);
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.querySelector('ul');
        const characters = this.phrase.split('');
        
        for(let i = 0; i < characters.length; i++) {
            if(/[a-z]/i.test(characters[i])) {
                let letterLi = document.createElement('li');
                letterLi.className = `hide letter ${characters[i]}`;
                letterLi.textContent = `${characters[i]}`;
                phraseUl.appendChild(letterLi);
            } else {
                let spaceLi = document.createElement('li');
                spaceLi.className = 'space';
                phraseUl.appendChild(spaceLi);
            }
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        if(this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        let letters = document.getElementsByClassName('letter');
        for(let i = 0; i < letters.length; i++) {
            if(letters[i].classList.contains(`${letter}`)) {
                letters[i].className = `show letter ${letter}`;
                letters[i].textContent = `${letter}`;
            }
        }
    }
}