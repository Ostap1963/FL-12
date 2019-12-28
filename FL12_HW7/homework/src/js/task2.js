let randomNum, userChoice, userAttempts, prize, userPrize, randomNumRange;
let Attempts = 3,
    firstPrize = 100,
    secondPrize = 200,
    firstMax = 8,
    secondMax = 12,
    lower = 2;
let confirmation = confirm('Do you want to play a game?');
if (confirmation === true) {
    randomNumRange = firstMax;
    randomNum = Math.floor(Math.random() * (randomNumRange + 1));
    userPrize = 0;
    prize = firstPrize;
    userAttempts = Attempts;
    while (userAttempts > 0) {
        userChoice = prompt(`
        Choose a roulette pocket number from 0 to ${randomNumRange}
        Attempts left: ${userAttempts}
        Total prize: ${userPrize}$
        ${randomNum}
        Possible prize on current attempt: ${prize}$`
        );
        if (userChoice === randomNum) {
            userPrize += prize;
            confirmation = confirm(`Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`)
            if (confirmation === true) {
                userAttempts = Attempts;
                randomNumRange = secondMax;
                prize = secondPrize;
                randomNum = Math.floor(Math.random() * (randomNumRange + 1));
            } else {
                confirmation = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.
                Do you want to play again?`);
                if (confirmation === true) {
                    prize = firstPrize;
                    userAttempts = Attempts;
                    userPrize = 0;
                    randomNumRange = firstMax;
                    randomNum = Math.floor(Math.random() * (randomNumRange + 1));

                } else {
                    break;
                }
            }

        } else {
            userAttempts--;
            prize /= lower;

        }
        if (userAttempts === 0) {
            confirmation = confirm(`Thank you for your participation. Your prize is: ${userPrize}$.
            Do you want to play again?`);
            if (confirmation === true) {
                userAttempts = Attempts;
                randomNumRange = firstMax;
                prize = firstPrize;
                userPrize = 0;
                randomNum = Math.floor(Math.random() * (randomNumRange + 1));
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}