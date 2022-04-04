document.querySelector("#start-button").addEventListener('click', startGame);
document.querySelector(".restart-button").addEventListener('click', startGame);
document.querySelector(".playAgain-button").addEventListener('click', startGame);
const gameSplash = document.querySelector(".splash");
const gameOver = document.querySelector(".game-over");
const winner = document.querySelector(".win-screen");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let background,
    player,
    ingredients = [],
    intervalId,
    score = [],
    catchedIng;

function startGame() {
    gameOver.classList.add("hidden");
	gameSplash.classList.add("hidden");
    winner.classList.add("hidden");
	reset();
    background = new Background(canvas, ctx);
    player = new Player(canvas, ctx);
    setInterval(() => {
        ingredients.push(new Ingredient(myIngredients,canvas, ctx));
    }, 800);
    createEventListeners();
    update();
    countdown();
}

function update() {
    clear();
    background.draw();
	player.draw();
    ingredients.forEach((item)=> {
        item.move();
        item.draw();
    });
    if (catchIngredient()) {
        if (catchedIng.good && (score.indexOf(catchedIng.name) == -1)){
            score.push(catchedIng.name);
            catchedIng.image = null;
            console.log(score);
            
        }
        if(!catchedIng.good) {
            console.log('bad');
		gameOver.classList.remove("hidden");
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
            return catchedIng;
		}
	}
	return catched;
}

function countdown() {
    let seconds = 31;
    const counter = document.getElementById('timer');
    
     const timer = setInterval(() => {
      seconds --;
      if (seconds > 9){
        counter.innerHTML = '0:' + seconds;   
      } else {
        counter.innerHTML = '0:0' + seconds;
      }
      if (seconds == 0) { 
        console.log('timeout');
        clearInterval(timer);
       gameOver.classList.remove("hidden");
        reset(); 
    };
        }, 1000);  
    

}

function reset() {
    cancelAnimationFrame(intervalId);
    background = null;
    player = null;
    ingredients = [];
    catchedIng = null;
    score = [];
    intervalId = null;
}

function checkIfWin() {
    if (score.length === 5) {
        winner.classList.remove("hidden");
		reset();
		return;
    }
}
