function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You rolled a ' + roll + '. Your running total of gold coins is ' + goldCoins + '!');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if ((roll === 4) && (goldCoins > 0)) {
            alert('You lost one gold coin, because you rolled a 4!');
            goldCoins = goldCoins - 1;
            continue;
        }
        if (roll < 5) {
            continue;
        } 
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}