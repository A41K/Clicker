function resetSave() {
    localStorage.clear();
    score = 0;
    cursorCount = 0;
    cursorCost = 10;
    intervalSpeed = 650;
    cursorScore = 1;
    speedUpgradeCost = 50;
    scoreUpgradeCost = 100;

    document.getElementById('score').textContent = score;
    document.getElementById('buyCursor').textContent = `Buy Cursor (${cursorCount}) - Cost: ${cursorCost}`;
    document.getElementById('upgradeSpeed').textContent = `Increase Cursor Speed - Cost: ${speedUpgradeCost}`;
    document.getElementById('upgradeScore').textContent = `Increase Cursor Score - Cost: ${scoreUpgradeCost}`;

    // Remove all cursors
    document.getElementById('cursorContainer').innerHTML = '';

    alert("Game progress has been reset!");
}
