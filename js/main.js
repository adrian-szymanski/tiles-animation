let spritesheet;
let spritedata;

let animation = [];
let tiles = [];

function preload() {
  spritedata = loadJSON('src/tiles.json');
  spritesheet = loadImage('src/spritesheet.png');
}

function setup() {
  createCanvas(540, 540);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

 /*for (let i = 0; i < 3; i++) {
    tiles[i] = new Sprite(animation, 360, i * 180, 0.2);
  } */
} 

function draw() {
  background(0);
  image(animation[frameCount % animation.length], 0, 0); 
  image(animation[frameCount % animation.length], 180, 0); 
  image(animation[frameCount % animation.length], 360, 0);
  image(animation[frameCount % animation.length], 0, 180); 
  image(animation[frameCount % animation.length], 180, 180); 
  image(animation[frameCount % animation.length], 360, 180);
  image(animation[frameCount % animation.length], 0, 360); 
  image(animation[frameCount % animation.length], 180, 360); 
  image(animation[frameCount % animation.length], 360, 360); 


  // image(spritesheet, -180, 0);


  for (let tile of tiles) {
    tile.show();
    tile.animate();
  }
}


