function play() {
    document.getElementById('first-page').style.display = 'none';


    document.getElementById('second-page').classList.remove('hidden');


    // creat a random alphabet 
    let randomChar = getRandomAlphabet()
    document.getElementById('showAlphabet').innerText = randomChar;


    setBgColor(randomChar.toLowerCase())
}
function playAgain() {
    hideElementById('third-page')
    showElementById('second-page')
    // setting new value 
    let resetLifeValue = document.getElementById('life-count');
    resetLifeValue.innerText = 5;

    let resetScoreValue = document.getElementById('score-show')
    resetScoreValue.innerText = 0
}
// code for after typing the alphabets
function matchCharacter(event) {
    let pressedKey = event.key;
    let currentCharacter = document.getElementById('showAlphabet').innerText.toLocaleLowerCase()
    if (pressedKey === currentCharacter) {
        removeBgColor(currentCharacter)
        console.log('ok')
        // set score
        let score = document.getElementById('score-show').innerText;
        let numberScore = parseInt(score)
        let newScore = numberScore + 1;
        console.log(newScore)
        document.getElementById('score-show').innerText = newScore;

        // continue the game again
        let randomChar = getRandomAlphabet()
        document.getElementById('showAlphabet').innerText = randomChar;
        setBgColor(randomChar.toLowerCase())
    }
    else {
        let defaultLife = parseInt(document.getElementById('life-count').innerText);
        let newLife = defaultLife - 1;
        document.getElementById('life-count').innerText = newLife;
        if (newLife < 1) {
            hideElementById('second-page')
            showElementById('third-page')

            let scoreShowElement = document.getElementById('score-show')
            let scoreShowTextValue = scoreShowElement.innerText;
            document.getElementById('final-score').innerText = scoreShowTextValue
        }
    }
}
document.addEventListener('keyup', matchCharacter)



// call back function for checking the enter key is pressed 
function checkEnterIsPressed(event) {
    if (event.key === 'Enter') {
        hideElementById('first-page')
        showElementById('second-page')
        playAgain()
    }

}

document.addEventListener('keyup', checkEnterIsPressed)