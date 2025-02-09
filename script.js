const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choice-btn");
const resultText = document.querySelector(".result-text");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        let result = "";
        if (userChoice === computerChoice) {
            result = "It's a Draw! 😐";
            resultText.className = "result-text draw";
        } else if (
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")
        ) {
            result = `You Win! 🎉 (${userChoice} beats ${computerChoice})`;
            resultText.className = "result-text win";
        } else {
            result = `You Lose! 😢 (${computerChoice} beats ${userChoice})`;
            resultText.className = "result-text lose";
        }

        resultText.innerHTML = result;
    });
});
