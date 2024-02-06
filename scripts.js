// script.js
let noCount = 0;
let yesPressed = false;

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const app = document.getElementById("app");
const loveBear = document.getElementById("loveBear");
const question = document.getElementById("question");

noButton.addEventListener("click", function () {
  noCount++;
  yesButton.style.fontSize = `${noCount * 20 + 16}px`; // Adjusting the "Yes" button size
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];
  noButton.innerText = phrases[Math.min(noCount, phrases.length - 1)];
});

yesButton.addEventListener("click", function () {
  yesPressed = true;
  if (yesPressed) {
    app.innerHTML = `<img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kisses"/><div class="text-4xl font-bold my-4">Ok yay!!!</div>`;
  }
});