// Task 5: Interactive Quiz Game
function askQuestion(question, choices, correctAnswer, callback) {
    document.getElementById('question-description').textContent = question;

    const choicesArea = document.getElementById('choices-area');
    choicesArea.innerHTML = '';

    for (let i = 0; i < choices.length; i++) {
        const choice = choices[i]; 

        const btn = document.createElement('button');
        btn.textContent = choice;

        btn.onclick = function () {
            const isCorrect = (choice === correctAnswer);
            callback(isCorrect);
        };

        choicesArea.appendChild(btn);
    }
}

function checkAnswer(isCorrect) {
    const resultBox = document.getElementById('result-description');

    if (isCorrect) {
        if (resultBox) {
            resultBox.textContent = "Correct! Great job.";
            resultBox.className = "feedback correct";
        }

        console.log("Correct!");
    } else {
        if (resultBox) {
            resultBox.textContent = "Wrong! Try again.";
            resultBox.className = "feedback wrong";
        }
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);