// creat random alphabet
function getRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray = alphabets.split('');
    const randomIndex = Math.floor(Math.random() * alphabets.length - 1);
    return alphabetArray[randomIndex];
}

// set background color
function setBgColor(elementid) {
    document.getElementById(elementid).classList.add('bg-red-400')
}

// remove bg color
function removeBgColor(elementid) {
    document.getElementById(elementid).classList.remove('bg-red-400')
}

// set score


// hide element by id
function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden')
}
// show element by id
function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden')
}