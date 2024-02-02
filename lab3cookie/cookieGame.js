let score = 0;
let unlockedObjects = [];

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
    console.log('Cookie clicked, score is now:', score); // For debugging
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object, unlockScore) {
    if (score >= unlockScore && !unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        document.getElementById(object).classList.remove('hidden');
        document.getElementById(object).classList.add('unlocked');
    }
}

function clickSpaceObject(object) {
    const element = document.getElementById(object);
    if (unlockedObjects.includes(object)) {
        element.classList.add('clicked');
        setTimeout(() => element.classList.remove('clicked'), 200);
        if (unlockedObjects.length === 3 && object !== 'poo' && !unlockedObjects.includes('poo')) {
            unlockObject('poo', 0); // Instantly show poo after first 3 are clicked
        }
    }
}

function checkUnlockables() {
    unlockObject('planet', 3);
    unlockObject('rocket', 7);
    unlockObject('alien', 15);
    // The star and poo emoji are handled within clickSpaceObject to ensure they unlock under specific conditions
}
