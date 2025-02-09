const choices = ["Rock", "Paper", "Scissors"];

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        let userChoice = this.innerText.split(" ")[1];  
        let computerChoice = choices[Math.floor(Math.random() * 3)];

        document.getElementById("user-move").innerText = userChoice;
        document.getElementById("computer-move").innerText = computerChoice;

        let result = "";
        if (userChoice === computerChoice) {
            result = "It's a Draw! 😐";
        } else if (
            (userChoice === "Rock" && computerChoice === "Scissors") ||
            (userChoice === "Paper" && computerChoice === "Rock") ||
            (userChoice === "Scissors" && computerChoice === "Paper")
        ) {
            result = "You Win! 🎉";
        } else {
            result = "Computer Wins! 🤖";
        }

        document.getElementById("result").innerText = result;
    });
});
