function play() {
    document.getElementById('first-page').style.display = 'none';


    document.getElementById('second-page').classList.remove('hidden')


    // creat a random alphabet 
    let randomChar = getRandomAlphabet()
    document.getElementById('showAlphabet').innerText = randomChar;


    setBgColor(randomChar.toLowerCase())
}
function matchCharacter(event) {
    let pressedKey = event.key;
    let currentCharacter = document.getElementById('showAlphabet').innerText.toLocaleLowerCase()
    if (pressedKey === currentCharacter) {
        console.log('ok')
    }
    else { console.log('not ok') }
}
document.addEventListener('keyup', matchCharacter)