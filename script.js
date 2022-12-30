let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {
    const userDifference = Math.abs(target - userGuess);
    const computerDifference = Math.abs(target - computerGuess);
    if (userDifference <= computerDifference) {
        return true;
    } else {
        return false;
    };
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    };
};

const advanceRound = () => {
    currentRoundNumber += 1;
}