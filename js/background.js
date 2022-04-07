class Background {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.moveSpeed = 9;
        this.y = 0;
        this.x = 0;
        this.image = new Image();
        this.image.src = "images/canvas-background.jpg";
    }

    draw() {
        if (this.image) {
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.canvas.width,
                this.canvas.height
            );
            this.ctx.drawImage(
                this.image,
                this.x - this.canvas.width,
                this.y,
                this.canvas.width,
                this.canvas.height
            ); 
        }
    }

    move() {
        this.x += this.moveSpeed;

		if (this.x > this.canvas.width) {
			this.x = 0;
		}
    }
}