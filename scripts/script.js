function play() {
    document.getElementById('first-page').style.display = 'none';


    document.getElementById('second-page').classList.remove('hidden')


    // creat a random alphabet 
    let randomChar = getRandomAlphabet()
    document.getElementById('showAlphabet').innerText = randomChar;


    setBgColor(randomChar.toLowerCase())






}