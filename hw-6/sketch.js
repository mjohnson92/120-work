var shape = {};
shape.length = 50;


function setup() {
    createCanvas( windowWidth, windowHeight );
      frameRate( 50);

      // Initial Background Color
      background( 'rgb(0, 0, 0)' );
}
// variables for x & y positions
var pos_x = 0 +50;
var pos_y = 0 -50;
var random = random();


    function draw() {



    // BG change color
    xel = map( mouseX, 0, width, 0, 255 );
    background( xel );

    var leftEdge = (100/2);
  var rightEdge = width - (shape.length * 2);

  var xm = mouseX;
 var xc = constrain(100, leftEdge, rightEdge);


var pos_x = xc

    // Drawing Rectangle
    push();
    translate( 0, xm);
    fill( 'rgb(44, 121, 170)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, 0 );
    fill( 'rgb(21, 190, 149)' );
    noStroke();
    rect( pos_y, pos_x, shape.length, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 2, xm);
    fill( 'rgb(43, 138, 132)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length * 2 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 2 );
    fill( 'rgb(22, 57, 134)' );
    noStroke();
    rect( pos_y, pos_x, shape.length * 2, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 4, xm);
    fill( 'rgb(99, 43, 138)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length * 3 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 4 );
    fill( 'rgb(40, 212, 212)' );
    noStroke();
    rect( pos_y, pos_x, shape.length * 3, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 6, xm);
    fill( 'rgb(43, 115, 138)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length * 4 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 6 );
    fill( 'rgb(212, 40, 210)' );
    noStroke();
    rect( pos_y, pos_x, shape.length * 4, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 8, xm);
    fill( 'rgb(138, 43, 108)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length * 5 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 8 );
    fill( 'rgb(40, 212, 135)' );
    noStroke();
    rect( pos_y, pos_x, shape.length * 5, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 10, xm);
    fill( 'rgb(12, 12, 74)' );
    noStroke();
    rect( pos_x, pos_y, shape.length, shape.length * 6 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 10 );
    fill( 'rgb(212, 112, 202)' );
    noStroke();
    rect( pos_y, pos_x, shape.length * 6, shape.length );
    pop();

    //-------------------------------------


    // Drawing Rectangle
    push();
    translate( 0, xm);
    fill( 'rgb(44, 121, 170)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, 0 );
    fill( 'rgb(21, 190, 149)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 2, xm);
    fill( 'rgb(43, 138, 132)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length * 2 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 2 );
    fill( 'rgb(22, 57, 134)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length * 2, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 4, xm);
    fill( 'rgb(99, 43, 138)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length * 3 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 4 );
    fill( 'rgb(40, 212, 212)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length * 3, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 6, xm);
    fill( 'rgb(43, 115, 138)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length * 4 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 6 );
    fill( 'rgb(212, 40, 210)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length * 4, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 8, xm);
    fill( 'rgb(138, 43, 108)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length * 5 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 8 );
    fill( 'rgb(40, 212, 135)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length * 5, shape.length );
    pop();


    // Drawing Rectangle
    push();
    translate( shape.length * 10, xm);
    fill( 'rgb(12, 12, 74)' );
    noStroke();
    rect( -pos_x, -pos_y, shape.length, shape.length * 6 );
    pop();


    // Drawing Rectangle
    push();
    translate( xm, shape.length * 10 );
    fill( 'rgb(212, 112, 202)' );
    noStroke();
    rect( -pos_y, -pos_x, shape.length * 6, shape.length );
    pop();



    push();
    fill( 'rgb(58, 130, 196)' );
    noStroke();
    rect( mouseX, mouseY, abs(-shape.length), abs(-shape.length) );
    pop();

    // update the rectangular position
    pos_x = pos_x += random( -100, 100 );

    // bound tp width of the canvas
    // how far it goes left %
    pos_x = pos_x % width;

    // update the rectangular position
    pos_y = pos_y += random( -200, 200 );

    // bound tp width of the canvas
    // how far it goes left %
    pos_y = pos_y % width;

    // Update Postion with Random
    pos_x += sqrt(pos_y);
    pos_y += random( -2, 2 );


    // No Cursor
    noCursor();
    noStroke();


}
