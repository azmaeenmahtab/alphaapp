function getRandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetArray = alphabets.split('');
    const randomIndex = Math.floor(Math.random() * alphabets.length - 1);
    return alphabetArray[randomIndex];
}


function setBgColor(elementid) {
    document.getElementById(elementid).classList.add('bg-red-400')
}

