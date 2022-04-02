document.querySelector("#start-button").addEventListener('click', startGame);
const gameSplash = document.querySelector(".splash");
const gameOver = document.querySelector(".game-over");
const winner = document.querySelector(".win-screen");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let background,
    player,
    ingredients = [],
    intervalId;

function startGame() {
    console.log('start!');
    gameOver.classList.add("hidden");
	//gameSplash.classList.add("hidden");
    winner.classList.add("hidden");
	reset();
    background = new Background(canvas, ctx);
    player = new Player(canvas, ctx);
    createEventListeners();
    update();
}

function update() {
    clear();
    background.draw();
	player.draw();
    intervalId = requestAnimationFrame(update);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createEventListeners() {
    document.addEventListener("keydown", (event) => {
		switch (event.key) {
			case "ArrowRight":
				player.moveRight();
				break;
			case "ArrowLeft":
				player.moveLeft();
				break;
			default:
				break;
		}
	}); 
}

function reset() {
    cancelAnimationFrame(intervalId);
    background = null;
    player = null;
    ingredients = [];
}
