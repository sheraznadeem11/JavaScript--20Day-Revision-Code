const road = document.getElementById("road");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");
const startScreen = document.getElementById("startScreen");

let gameRunning = false;
let playerX = 135;
let speed = 5;
let score = 0;

let keys = {};

// Controls
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Start Game
function startGame() {
    startScreen.style.display = "none";
    gameRunning = true;
    score = 0;
    scoreDisplay.innerText = score;
    requestAnimationFrame(gameLoop);

    // Create road lines
    for (let i = 0; i < 5; i++) {
        let line = document.createElement("div");
        line.classList.add("line");
        line.style.top = (i * 120) + "px";
        road.appendChild(line);
    }

    // Create enemies
    for (let i = 0; i < 3; i++) {
        createEnemy(i * -200);
    }
}

// Create Enemy Car
function createEnemy(top) {
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.left = Math.floor(Math.random() * 3) * 100 + 10 + "px";
    enemy.style.top = top + "px";
    road.appendChild(enemy);
}

// Game Loop
function gameLoop() {
    if (!gameRunning) return;

    moveLines();
    moveEnemies();
    movePlayer();

    score++;
    scoreDisplay.innerText = score;

    requestAnimationFrame(gameLoop);
}

// Move Road Lines
function moveLines() {
    document.querySelectorAll(".line").forEach(line => {
        let top = parseInt(line.style.top);
        top += speed;

        if (top > 550) top = -100;

        line.style.top = top + "px";
    });
}

// Move Enemy Cars
function moveEnemies() {
    document.querySelectorAll(".enemy").forEach(enemy => {
        let top = parseInt(enemy.style.top);
        top += speed;

        if (top > 550) {
            top = -100;
            enemy.style.left = Math.floor(Math.random() * 3) * 100 + 10 + "px";
        }

        enemy.style.top = top + "px";

        // Collision
        if (isCollide(player, enemy)) {
            gameRunning = false;
            alert("💥 Game Over!\nScore: " + score);
            location.reload();
        }
    });
}

// Move Player
function movePlayer() {
    if (keys["ArrowLeft"] && playerX > 10) playerX -= 5;
    if (keys["ArrowRight"] && playerX < 260) playerX += 5;

    player.style.left = playerX + "px";
}

// Collision Detection
function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    return !(
        aRect.bottom < bRect.top ||
        aRect.top > bRect.bottom ||
        aRect.right < bRect.left ||
        aRect.left > bRect.right
    );
}