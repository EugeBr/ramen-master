class Player {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.image = null;
        this.playerSpeed = 20;
        this.width = 80;
        this.height = 150;
        this.y = 440;
        this.x = 500;
        this.init();
    }
    init() {
        this.image = new Image();
        this.image.src = "images/player.png";
    }
    draw() {
        if (this.image) {
            this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
    moveLeft() {
        if (this.x > 0) {
            this.x -= this.playerSpeed;
        }
    }
    moveRight() {
        if (this.x < this.canvas.width - this.width) {
            this.x += this.playerSpeed;
        }
    }
}