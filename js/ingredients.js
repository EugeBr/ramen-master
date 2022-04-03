const myIngredients = [
    {name: 'egg', img: 'images/egg.png', good: true},
    {name: 'fishcake', img: 'images/fishcake.png', good: true},
    {name: 'noodles', img: 'images/noodles.png', good:true},
    {name: 'pork', img: 'images/pork.png', good: true},
    {name: 'broth', img: 'images/teapot.png', good: true},
    {name: 'egg', img: 'images/egg.png', good: true},
    {name: 'fishcake', img: 'images/fishcake.png', good: true},
    {name: 'noodles', img: 'images/noodles.png', good:true},
    {name: 'pork', img: 'images/pork.png', good: true},
    {name: 'broth', img: 'images/teapot.png', good: true},
    {name: 'egg', img: 'images/egg.png', good: true},
    {name: 'fishcake', img: 'images/fishcake.png', good: true},
    {name: 'noodles', img: 'images/noodles.png', good:true},
    {name: 'pork', img: 'images/pork.png', good: true},
    {name: 'broth', img: 'images/teapot.png', good: true},
    {name: 'avocado', img: 'images/avocado.png', good: false},
    {name: 'banana', img: 'images/banana.png', good: false},
    {name: 'beer', img: 'images/beer.png', good: false},
    {name: 'beetroot.png', img: 'images/beetroot.png', good: false},
    {name: 'cheese', img: 'images/cheese.png', good: false},
    {name: 'chicken', img: 'images/chicken.png', good: false},
    {name: 'coconut', img: 'images/coconut.png', good: false},
    {name: 'croissant', img: 'images/croissant.png', good: false},
    {name: 'donut', img: 'images/donut.png', good: false},
    {name: 'nachos', img: 'images/nachos.png', good: false},
    {name: 'nutella', img: 'images/nutella.png', good:false},
    {name: 'oreo', img: 'images/oreo.png', good:false},
    {name: 'snicker', img: 'images/snicker.png', good: false},
    {name: 'wafle', img: 'images/wafle.png', good: false},
    {name: 'watermelon', img: 'images/watermelon.png', good: false}
];

class Ingredient {
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

init() {
    let random = Math.floor(Math.random() * (this.ing.length));
    this.image = new Image();
    this.image.src = this.ing[random].img;
    this.good = this.ing[random].good;
    this.name = this.ing[random].name;
}

draw() {
    if (this.image) {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}
 
move() {
    this.y += this.moveSpeed;
}


}