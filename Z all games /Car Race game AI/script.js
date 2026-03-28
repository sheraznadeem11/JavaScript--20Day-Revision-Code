const road = document.getElementById("road");
const player = document.getElementById("player");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const speedMeter = document.getElementById("speedMeter");
const startScreen = document.getElementById("startScreen");

let gameRunning = false;
let gamePaused = false;
let playerX = 170;
let playerY = 20;
let speed = 5;
let score = 0;
let level = 1;
let keys = {};
let enemies = [];
let playerJump = false;

// Controls
document.addEventListener("keydown", e => {
    keys[e.key] = true;

    if(e.key === " " && !playerJump) jump();

    if(e.key === "Enter" && gameRunning){ // Pause / Resume
        gamePaused = !gamePaused;
        if(!gamePaused) requestAnimationFrame(gameLoop);
    }
});
document.addEventListener("keyup", e => keys[e.key] = false);

// Start Game
function startGame() {
    startScreen.style.display = "none";
    gameRunning = true;
    gamePaused = false;
    score = 0;
    level = 1;
    speed = 5;
    playerX = 170;
    playerY = 20;
    scoreDisplay.innerText = score;
    levelDisplay.innerText = level;
    speedMeter.innerText = speed;
    player.style.left = playerX + "px";
    player.style.bottom = playerY + "px";

    // Road Lines
    for(let i=0;i<5;i++){
        let line = document.createElement("div");
        line.classList.add("line");
        line.style.top = (i*120)+"px";
        road.appendChild(line);
    }

    // Enemies
    for(let i=0;i<3;i++) createEnemy(i*-200);

    requestAnimationFrame(gameLoop);
}

// Jump
function jump(){
    playerJump = true;
    let up = 0;
    let upInterval = setInterval(() => {
        if(up < 80){
            playerY +=5;
            player.style.bottom = playerY + "px";
            up +=5;
        } else {
            clearInterval(upInterval);
            let downInterval = setInterval(()=>{
                if(up>0){
                    playerY -=5;
                    player.style.bottom = playerY + "px";
                    up -=5;
                } else {
                    clearInterval(downInterval);
                    playerJump=false;
                }
            },20);
        }
    },20);
}

// Create Enemy
function createEnemy(top){
    let enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.left = Math.floor(Math.random()*3)*100 + 60 + "px";
    enemy.style.top = top + "px";
    enemy.style.background = randomColor();
    road.appendChild(enemy);
    enemies.push(enemy);
}

function randomColor(){
    return `hsl(${Math.floor(Math.random()*360)}, 80%, 50%)`;
}

// Game Loop
function gameLoop(){
    if(!gameRunning || gamePaused) return;

    moveLines();
    moveEnemies();
    movePlayer();

    score++;
    scoreDisplay.innerText = score;

    requestAnimationFrame(gameLoop);
}

// Move Road Lines
function moveLines(){
    document.querySelectorAll(".line").forEach(line=>{
        let top = parseInt(line.style.top);
        top += speed;
        if(top > 650) top = -100;
        line.style.top = top + "px";
    });
}

// Move Enemies
function moveEnemies(){
    enemies.forEach(enemy=>{
        let top = parseInt(enemy.style.top);
        top += speed;
        if(top>650){
            top=-150;
            enemy.style.left = Math.floor(Math.random()*3)*100 + 60 + "px";
            enemy.style.background = randomColor();
        }
        enemy.style.top = top+"px";

        // Collision detection with side buffer
        if(isFrontCollision(player, enemy)){
            gameRunning = false;
            alert(`💥 Game Over!\nScore: ${score}\nLevel: ${level}`);
            location.reload();
        }
    });
}

// Move Player
function movePlayer(){
    if(keys["ArrowLeft"] && playerX>10) playerX -=5;
    if(keys["ArrowRight"] && playerX<320) playerX +=5; // keep inside road
    player.style.left = playerX + "px";
}

// Collision detection with side buffer
function isFrontCollision(a,b){
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();

    // Horizontal buffer: player can pass by side safely
    let horizontalMargin = 15;
    let verticalMargin = 10;

    let verticalOverlap = aRect.bottom - verticalMargin > bRect.top &&
                          aRect.top + verticalMargin < bRect.bottom;

    let horizontalOverlap = aRect.right - horizontalMargin > bRect.left &&
                            aRect.left + horizontalMargin < bRect.right;

    return verticalOverlap && horizontalOverlap;
}