let shapes = [0];
let degree = 100;
let dimension = random(1, 5);
function setup() {
  createCanvas( windowWidth, windowHeight);
  frameRate(100);
}

function draw() {
  background('rgb(0, 0, 20)');

  shape(windowWidth*.50, windowHeight*.5+1);
  shape(windowWidth*.55, windowHeight*.5-1);
  shape(windowWidth*.45, windowHeight*.5+1);
  shape(windowWidth*.40, windowHeight*.5-1);
  shape(windowWidth*.60, windowHeight*.5+1);
  shape(windowWidth*.35, windowHeight*.5-1);
  shape(windowWidth*.65, windowHeight*.5+1);

}

function shape( pos_x, pos_y) {

  if (windowWidth-100 >= mouseX && mouseX >= 100 ) {  // -------- Shape appears 100 pixels within the screen
        for (var x = 0; x <= mouseButton; x += 15)    // -------- for loop will run til mouse is clicked
        {
          push();

          translate( pos_x, pos_y );
          rotate( radians(degree + degree) );

          noStroke();                                 // -------- no stroke on quad
          fill( 'rgb(243, 255, 52)' );                 // -------- quad color
          quad( dimension, dimension, dimension, dimension, dimension, dimension, dimension, random(1, 1110) );  // --------- quad dimensions, var dimensions change over time
          degree += 1050;                              // -------- degree change
          pop();
}}}
