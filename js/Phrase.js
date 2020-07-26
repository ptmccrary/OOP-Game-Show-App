class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase(phrase);
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.querySelector('ul');
        const characters = this.phrase.split('');
        
        for(let i = 0; i < characters.length; i++){
            if(/[a-z]/i.test(characters[i])){
                let letterLi = document.createElement('li');
                letterLi.className = `hide letter ${characters[i]}`;
                letterLi.textContent = `${characters[i]}`;
                phraseUl.appendChild(letterLi);
            } else{
                let spaceLi = document.createElement('li');
                spaceLi.className = 'space';
                phraseUl.appendChild(spaceLi);
            }
        }
    }

    checkLetter(){

    }

    showMatchedLetter(){

    }
}