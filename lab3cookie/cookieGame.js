let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object) {
    if (!unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.add('unlocked');
        alert(`Congratulations! You've unlocked the ${object}!`);
    }
}

function checkUnlockables() {
    if (score >= 10) {
        unlockObject('planet');
    }
    if (score >= 20) {
        unlockObject('rocket');
    }
    if (score >= 30) {
        unlockObject('alien');
    }
}
