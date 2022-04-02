class Background {
    constructor (canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
       // this.image = null;
        this.y = 0;
        this.x = 0;
        //this.init();
        this.image = new Image();
        this.image.src = "images/canvas-background.jpg";
    }
    //init() {
        
   // }
    draw() {
        if (this.image) {
            this.ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.canvas.width,
                this.canvas.height
            );
        }
    }
}