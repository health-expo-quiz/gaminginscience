// game.js

// Game state
let infectionRate = 0;
let mortalityRate = 0;
let containmentLevel = 0;
let isGameOver = false;
let mutationChance = 5; // Chance of mutation per turn (in %)

// DOM elements
const infectionRateDisplay = document.getElementById('infection-rate');
const mortalityRateDisplay = document.getElementById('mortality-rate');
const containmentLevelDisplay = document.getElementById('containment-level');
const gameOverMessage = document.getElementById('game-over-message');
const actionButtons = document.querySelectorAll('.action-button');
const virusImage = document.getElementById('virus-image');

// Game loop
function updateGame() {
    // Update stats display
    infectionRateDisplay.textContent = infectionRate + '%';
    mortalityRateDisplay.textContent = mortalityRate + '%';
    containmentLevelDisplay.textContent = containmentLevel + '%';

    // Game over conditions
    if (infectionRate >= 100 || mortalityRate >= 100) {
        gameOver('The virus has overrun the world!');
    } else if (containmentLevel >= 100) {
        gameOver('The virus has been contained!');
    }

    // Basic virus progression
    if (!isGameOver) {
        infectionRate += 1;
        mortalityRate += 0.5;

        // Mutation chance
        if (Math.random() * 100 < mutationChance) {
            mutateVirus();
        }
    }

    // Visual effects (example: change virus image on mutation)
    if (mutationChance > 10) {
        virusImage.src = 'mutated_virus.png'; // Replace with your mutated virus image
    } else {
        virusImage.src = 'normal_virus.png'; // Replace with your normal virus image
    }
}

// Virus mutation function
function mutateVirus() {
    // Randomly increase infection rate or mortality rate
    if (Math.random() < 0.5) {
        infectionRate += 5;
    } else {
        mortalityRate += 5;
    }
    mutationChance += 5; // Increase mutation chance after mutation
}

// Action button handlers
function increaseContainment() {
    if (!isGameOver) {
        containmentLevel += 5;
        updateGame();
    }
}

function decreaseInfectionRate() {
    if (!isGameOver) {
        infectionRate -= 5;
        updateGame();
    }
}

function decreaseMortalityRate() {
    if (!isGameOver) {
        mortalityRate -= 5;
        updateGame();
    }
}

// Start the game loop
setInterval(updateGame, 1000); // Update every second
