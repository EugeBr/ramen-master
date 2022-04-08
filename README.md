# Ramen Master

## Description

Ramen Master is a game where a single player needs to complete a ramen preparation by catching all five necessary ingredients, within a 30 senconds time frame.

## MVP (DOM - CANVAS)

- game has one player that moves left or right.
- different ingredients fall down at random.
- the player is able to catch one of each correct ingredient without loosing.
- timer counts down from 30 seconds and changes to intermitent red on last five seconds.
- player looses if catches same ingredient twice.
- player looses if catches wrong ingredient.
- scoreboard showes images of catched ingredients.
- canvas has background motion.
- game is able to restart from loosing and winning screen.
- game has background sound.

## Backlog

- add more obstacles
- add player jump to evoid obstacles
- add input for player name

## DATA STRUCTURE

# index.js

- startGame() {}
- update() {}
- clear() {}
- creatEventListeners() {}
- catchIngredient() {}
- countdown() {}
- getScore() {}
- reset() {}
- checkIfWin() {}

# ingredients.js

- myIngredients=[]
- Ingredient {
    constructor(ing, canvas, ctx) {
        this.ing = ing;
        this.image = null;
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = 80;
        this.height = 80;
        this.x = Math.floor(Math.random() * (this.canvas.width - this.width));
        this.y = 0;
        this.moveSpeed = 4;
        this.good = null;
        this.name = null;
        this.init(); 
    }
- init() {}
- draw() {}
- move() {}

# background.js

- Background {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.moveSpeed = 9;
        this.y = 0;
        this.x = 0;
        this.image = new Image();
        this.image.src = "images/canvas-background.jpg";
    }
- draw() {}
- move() {}

# player.js

- Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.playerSpeed = 40;
        this.width = 100;
        this.height = 200;
        this.y = 600;
        this.x = 700;
        this.init();
    }
- init() {}
- draw() {}
- moveLeft() {}
- moveRight() {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- index - buildDom
- background - buildCanvas
- background - draw
- ingredients - buildIngredients
- ingredients - draw
- ingredients - move
- index - startGame
- index - createEventListeners
- index - update
- index - clear
- index - reset
- player - buildPlayer
- player - draw
- player - moveLeft
- player - moveRight
- index - catchIngredient
- index - checkIfWin
- index - countdown
- index - getScore
- background - move
- index - gameSound

## Links

### Trello
[Link url](https://trello.com/b/PG7T9Ev2/project-1)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/EugeBr/ramen-master.git)
[Link Deploy](https://eugebr.github.io/ramen-master/)

### Slides
URls for the project presentation (slides)
[Link Slides](https://docs.google.com/presentation/d/19PxYDc3W0opsglC_V32P9dFNyn6r-sWhlVHj761t1ls/edit?usp=sharing)