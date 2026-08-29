// Sound Effects (Web Audio API / Online Sounds)
const correctSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3');
const wrongSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2673/2673-preview.mp3');

function checkAnswer(button, isCorrect, explanation) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('.option-btn');
    const feedbackDiv = parent.querySelector('.feedback');

    // Disable all buttons after selection
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.style.backgroundColor = "#22c55e";
        button.style.color = "#ffffff";
        correctSound.play();
        feedbackDiv.innerHTML = `<p style="color: #22c55e; font-weight: bold; margin-top: 10px;">🎉 Excellent! Correct Answer! 👏</p><p style="font-size: 0.9rem;">${explanation}</p>`;
    } else {
        button.style.backgroundColor = "#ef4444";
        button.style.color = "#ffffff";
        wrongSound.play();
        feedbackDiv.innerHTML = `<p style="color: #ef4444; font-weight: bold; margin-top: 10px;">💡 Not quite right, keep trying! 🧠</p><p style="font-size: 0.9rem;">${explanation}</p>`;
    }
}
