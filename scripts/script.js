function play() {
    document.getElementById('first-page').style.display = 'none';


    document.getElementById('second-page').classList.remove('hidden');


    // creat a random alphabet 
    let randomChar = getRandomAlphabet()
    document.getElementById('showAlphabet').innerText = randomChar;


    setBgColor(randomChar.toLowerCase())
}

// code for after typing the alphabets
function matchCharacter(event) {
    let pressedKey = event.key;
    let currentCharacter = document.getElementById('showAlphabet').innerText.toLocaleLowerCase()
    if (pressedKey === currentCharacter) {
        removeBgColor(currentCharacter)
        console.log('ok')
        // set score
        setScore('score-show')

        // continue the game again
        let randomChar = getRandomAlphabet()
        document.getElementById('showAlphabet').innerText = randomChar;
        setBgColor(randomChar.toLowerCase())
    }
    else { console.log('not ok') }
}
document.addEventListener('keyup', matchCharacter)