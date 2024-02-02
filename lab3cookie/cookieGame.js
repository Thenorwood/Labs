let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
    console.log('Cookie clicked, score is now:', score); // Add this for debugging
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object, unlockScore) {
    if (score >= unlockScore && !unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.remove('hidden');
    }
}

function clickSpaceObject(object) {
    document.getElementById(object).classList.add('clicked');
    setTimeout(() => document.getElementById(object).classList.remove('clicked'), 200);
    if (unlockedObjects.length === 3 && !unlockedObjects.includes('star')) {
        unlockObject('star', 0); // Instantly show star after first 3 are clicked
    }
}

function checkUnlockables() {
    unlockObject('planet', 3);
    unlockObject('rocket', 7);
    unlockObject('alien', 15);
}
