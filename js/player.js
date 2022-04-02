class Player {
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