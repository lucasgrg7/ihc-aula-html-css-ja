let score = 0;

function updateScore() {
  document.getElementById("score").textContent = "Pontuação: " + score + " XP";
}

function addPoints() {
  score += 10;
  updateScore();
}

function removePoints() {
  score -= 5;
  updateScore();
}