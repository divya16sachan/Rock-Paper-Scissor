let userScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function playGame(userChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    
    document.getElementById("user-move").textContent = getEmoji(userChoice);
    document.getElementById("computer-move").textContent = getEmoji(computerChoice);

    let winner = getWinner(userChoice, computerChoice);
    
    if (winner === "user") {
        userScore++;
    } else if (winner === "computer") {
        computerScore++;
    }

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (userScore === 5) {
        document.getElementById("result").textContent = "🎉 You won the game!";
        endGame();
    } else if (computerScore === 5) {
        document.getElementById("result").textContent = "💀 Computer won the game!";
        endGame();
    } else {
        document.getElementById("result").textContent = winner === "draw" ? "It's a draw! 🤝" : 
            (winner === "user" ? "You win this round! 😃" : "Computer wins this round! 😖");
    }
}

function getWinner(user, computer) {
    if (user === computer) return "draw";
    if ((user === "rock" && computer === "scissors") ||
        (user === "scissors" && computer === "paper") ||
        (user === "paper" && computer === "rock")) {
        return "user";
    }
    return "computer";
}

function getEmoji(choice) {
    switch(choice) {
        case "rock": return "✊";
        case "paper": return "✋";
        case "scissors": return "✌️";
        default: return "❓";
    }
}

function endGame() {
    document.querySelectorAll(".buttons button").forEach(btn => btn.disabled = true);
    document.getElementById("restart").style.display = "inline-block";
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById("user-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
    document.getElementById("user-move").textContent = "❓";
    document.getElementById("computer-move").textContent = "❓";
    document.getElementById("result").textContent = "Make your move!";
    document.querySelectorAll(".buttons button").forEach(btn => btn.disabled = false);
    document.getElementById("restart").style.display = "none";
}
