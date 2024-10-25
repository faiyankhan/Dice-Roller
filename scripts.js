function rollDice(){
    const min = 1;
    const max = 6;

    const randomNumber = Math.round(Math.random() * (max-min)) + min;
    console.log(randomNumber);
}