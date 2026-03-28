const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 10 * box }];
let food = {
  x: Math.floor(Math.random() * 20) * box,
  y: Math.floor(Math.random() * 20) * box,
};

let direction = "RIGHT";
let score = 0;
let game;

// Control
document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

// Draw Game
function draw() {
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, 400, 400);

  // Snake
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? "#00ffcc" : "#00cc99";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  // Food
  ctx.fillStyle = "#ff4757";
  ctx.fillRect(food.x, food.y, box, box);

  // Move Snake
  let headX = snake[0].x;
  let headY = snake[0].y;

  if (direction === "LEFT") headX -= box;
  if (direction === "UP") headY -= box;
  if (direction === "RIGHT") headX += box;
  if (direction === "DOWN") headY += box;

  // Eat food
  if (headX === food.x && headY === food.y) {
    score++;
    document.getElementById("score").innerText = score;

    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box,
    };
  } else {
    snake.pop();
  }

  let newHead = { x: headX, y: headY };

  // Game Over
  if (
    headX < 0 ||
    headY < 0 ||
    headX >= 400 ||
    headY >= 400 ||
    collision(newHead, snake)
  ) {
    clearInterval(game);
    alert("Game Over 😢\nScore: " + score);
  }

  snake.unshift(newHead);
}

// Collision Check
function collision(head, array) {
  return array.some((segment) => segment.x === head.x && segment.y === head.y);
}

// Restart Game
function resetGame() {
  snake = [{ x: 9 * box, y: 10 * box }];
  direction = "RIGHT";
  score = 0;
  document.getElementById("score").innerText = score;
  food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  };
  clearInterval(game);
  game = setInterval(draw, 100);
}

// Start Game
game = setInterval(draw, 100);
