let score = 0;
let unlockedObjects = [];
let clickedObjects = new Set(); // Track which objects have been clicked

function clickCookie() {
    score++;
    updateScore();
    checkUnlockables();
}

function updateScore() {
    document.getElementById('scoreValue').textContent = score;
}

function unlockObject(object, unlockScore) {
    if (score >= unlockScore && !unlockedObjects.includes(object)) {
        unlockedObjects.push(object);
        const element = document.getElementById(object);
        element.classList.add('unlocked');
        if (object !== 'poo') {
            clickedObjects.add(object); // Add to clickedObjects for the initial three
        }
    }
    // Automatically display and animate poo when other emojis are clicked
    if (clickedObjects.size === 3 && !unlockedObjects.includes('poo')) {
        const pooElement = document.getElementById('poo');
        pooElement.style.display = 'inline-block'; // Make poo visible
        unlockObject('poo', 0); // This adds 'unlocked' class to poo
    }
}

function clickSpaceObject(object) {
    if (unlockedObjects.includes(object)) {
        const element = document.getElementById(object);
        element.classList.add('clicked');
        setTimeout(() => element.classList.remove('clicked'), 200);
    }
}

function checkUnlockables() {
    unlockObject('planet', 3);
    unlockObject('rocket', 7);
    unlockObject('alien', 15);
    // The logic for showing the poo emoji after the conditions are met is integrated above
}
