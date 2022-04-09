document.querySelector("#start-button").addEventListener('click', startGame);
document.querySelector(".restart-button").addEventListener('click', startGame);
document.querySelector(".playAgain-button").addEventListener('click', startGame);

const gameSplash = document.querySelector(".splash");
const gameBoard = document.querySelector(".game-board");
const gameOver = document.querySelector(".game-over");
const winner = document.querySelector(".win-screen");
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const ingEgg = document.querySelector(".egg");
const ingFishcake = document.querySelector(".fishcake");
const ingNoodles = document.querySelector(".noodles");
const ingPork = document.querySelector(".pork");
const ingBroth = document.querySelector(".broth");
const countDown = document.querySelector(".timer");

let background,
    player,
    ingredients = [],
    intervalId,
    score = [],
    catchedIng,
    timer,
    ingFall,
    gameSound = new Audio("./Music/Sushi.mp3"),
    winningSound = new Audio("./Music/winner.wav"),
    loosingSound = new Audio("./Music/looser.wav");


function startGame() {
	gameSplash.classList.add("hidden");
    gameOver.classList.add("hidden");
    winner.classList.add("hidden");
    gameBoard.classList.remove("hidden");
	reset();
    background = new Background(canvas, ctx);
    player = new Player(canvas, ctx);
    ingFall = setInterval(() => {
        ingredients.push(new Ingredient(myIngredients,canvas, ctx));
    }, 800);
    createEventListeners();
    update();
    countdown();
    gameSound.play();
    gameSound.volume = 0.1;
}

function update() {
    clear();
    background.draw();
    background.move();
	player.draw();
    ingredients.forEach((item)=> {
        item.move();
        item.draw();
    });
    if (catchIngredient()) {
        if (catchedIng.good && (score.indexOf(catchedIng.name) == -1)){
            score.push(catchedIng.name);
            getScore(catchedIng.name);
            catchedIng.image = null;
        }
        else {
		gameOver.classList.remove("hidden");
        gameBoard.classList.add("hidden");
        loosingSound.play();
        loosingSound.volume = 0.1;
		reset();
		return;
        }
        checkIfWin();
	}
    intervalId = requestAnimationFrame(update);
}

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createEventListeners() {
    document.onkeydown =  (event) => {
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
	}; 
}

function catchIngredient() {
	let catched = false;
	for (let i = 0; i < ingredients.length; i++) {
	    catchedIng = ingredients[i];
		const withinX =
			player.x + (player.width - 50) > catchedIng.x && player.x < catchedIng.x + (player.width - 50);
		const withinY =
        catchedIng.y + catchedIng.height > player.y && catchedIng.y < player.y + (player.height -50);

		catched = withinX && withinY;

		if (catched) {
            ingredients.splice(i, 1);
            return catchedIng;
		}
	}
	return catched;
}

function countdown() {
    let seconds = 30;
    
      timer = setInterval(() => {
      seconds --;
      if (seconds > 9){
        countDown.innerHTML = '0:' + seconds;   
      } else {
        countDown.innerHTML = '0:0' + seconds;
      }
      if (seconds < 6){
            countDown.classList.toggle("red");
      }
      if (seconds == 0) { 
        clearInterval(timer);
       gameOver.classList.remove("hidden");
       gameBoard.classList.add("hidden");
       loosingSound.play();
       loosingSound.volume = 0.1;
        reset(); 
    };
        }, 1000);  
}

function getScore(item) {
    switch(item) {
        case 'egg': 
        ingEgg.classList.remove('faded');
        break;
        case 'fishcake':
        ingFishcake.classList.remove('faded');
        break;
        case 'noodles':
        ingNoodles.classList.remove('faded');
        break;
        case 'pork':
        ingPork.classList.remove('faded');
        break;
        case 'broth':
        ingBroth.classList.remove('faded');
        break;
    }
}

function reset() {
    cancelAnimationFrame(intervalId);
    background = null;
    player = null;
    ingredients = [];
    catchedIng = null;
    score = [];
    intervalId = null;
    clearInterval(timer);
    clearInterval(ingFall);
    ingEgg.classList.add('faded');
    ingFishcake.classList.add('faded');
    ingNoodles.classList.add('faded');
    ingPork.classList.add('faded');
    ingBroth.classList.add('faded');
    gameSound.pause();
}

function checkIfWin() {
    if (score.length === 5) {
        winner.classList.remove("hidden");
        gameBoard.classList.add("hidden");
        winningSound.play();
        winningSound.volume = 0.1;
		reset();
		return;
    }
}

