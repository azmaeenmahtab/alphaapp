function getRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray = alphabets.split('');
    const randomIndex = Math.floor(Math.random() * alphabets.length - 1);
    return alphabetArray[randomIndex];
}


function setBgColor(elementid) {
    document.getElementById(elementid).classList.add('bg-red-400')
}

// remove bg color
function removeBgColor(elementid) {
    document.getElementById(elementid).classList.remove('bg-red-400')
}

// set score
function setScore(elementid) {
    let score = document.getElementById(elementid).innerText;
    let numberScore = parseInt(score)
    let newScore = numberScore + 1;
    document.getElementById(elementid).innerText = newScore;
}