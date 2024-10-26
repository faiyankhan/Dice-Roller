function resetDice() {
    const diceImg = document.getElementById('img-dice');
    diceImg.src = 'Roll-Dice.png';
}

function rollDice() {
    const min = 1;
    const max = 6;

    const randomNum = Math.round(Math.random() * (max - min)) + min;

    const diceImg = document.getElementById('img-dice');

    if (randomNum == 1) {
        diceImg.src = '1.png';
    }
    else if (randomNum == 2) {
        diceImg.src = '2.png';
    }
    else if (randomNum == 3) {
        diceImg.src = '3.png';
    }
    else if (randomNum == 4) {
        diceImg.src = '4.png';
    }
    else if (randomNum == 5) {
        diceImg.src = '5.png';
    }
    else if (randomNum == 6) {
        diceImg.src = '6.png';
    }

    setTimeout(resetDice, 3000);
}
