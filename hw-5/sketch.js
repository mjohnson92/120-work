// ----------------------------------------- Hello
// ----------------------------------------- variable widens diameter of rotation

var shapesk = 250;

// ----------------------------------------- Set up canvas

function setup() {
    createCanvas( windowWidth, windowHeight );

// ----------------------------------------- Set up frame rate

    frameRate( 500 );
}

// ----------------------------------------- Starting degree for shape elements

    var degree = 0;

// ----------------------------------------- Drawing background color

    function draw () {
    background( 0, 0, 0 );

// ----------------------------------------- Creates Line that rotates

      push();
      translate( width*0.5, height*0.5 ); // translates to center of rotation
      rotate( radians(degree) );          // rotates at stated amount
      noStroke();                         // no outer stroke on shape
      fill( 'rgb(85, 0, 0)' );                // fill color
      rect( shapesk, 10, 1, 35 , 105, 5 );    // rectangular shape

      degree = degree;

      pop();

// ----------------------------------------- Creates Line that rotates

      push();

      translate( width*0.5, height*0.5 );
      rotate( radians(degree) );
      noStroke();
      fill( 'rgb(125, 0, 0)' );
      rect( shapesk, 10, 2, 35 , 105, 5 );

// ----------------------------------------- Change degree position

      degree = degree - 35;

      pop();

// ----------------------------------------- Creates Line that rotates

        push();

        translate( width*0.5, height*0.5 );
        rotate( radians(degree) );
        noStroke();
        fill( 'rgb(145, 0, 0)' );
        rect( shapesk, 10, 3, 35 , 105, 5);

// ----------------------------------------- Change degree position

        degree = degree - 70;

        pop();

// ----------------------------------------- Creates Line that rotates

      push();

      translate( width*0.5, height*0.5);
      rotate( radians(degree) );
      noStroke();
      fill( 'rgb(185, 0, 0)' );
      rect( shapesk, 10, 2, 35 , 105, 5 );

// ----------------------------------------- Change degree position

      degree = degree + 25;

      pop();

// ----------------------------------------- Creates Line that rotates

        push();

        translate( width*0.5, height*0.5 );
        rotate( radians(degree) );
        noStroke();
        fill( 'rgb(210, 0, 0)' );
        rect( shapesk, 10, 1, 35 , 105, 5 );

// ----------------------------------------- Change degree position

        degree = degree + 50;

        pop();

// ----------------------------------------- Creates Line that rotates

          push();

          translate( width*0.5, height*0.5 );
          rotate( radians(degree) );
          noStroke();
          fill( 'rgb(235, 0, 0)' );
          rect( shapesk, 10, 2, 35 , 105, 5 );

// ----------------------------------------- Change degree position

          degree = degree + 75;

          pop();

// ----------------------------------------- Creates Line that rotates

            push();

            translate( width*0.5, height*0.5 );
            rotate( radians(degree) );
            noStroke();
            fill( 'rgb(255, 0, 0)' );
            rect( shapesk, 10, 3, 35 , 105, 5 );

// ----------------------------------------- Change degree position

            degree = degree + 100;

            pop();

// ----------------------------------------- Creates Line that rotates

              push();

              translate( width*0.5, height*0.5 );
              rotate( radians(degree) );
              noStroke();
              fill( 'rgb(158, 0, 255)' );
              rect( shapesk, 10, 5, 35 , 105, 5 );

// ----------------------------------------- Change degree position

              degree = degree - 120;

              pop();

// ----------------------------------------- Creates Line that rotates

                push();

                translate( width*0.5, height*0.5 );
                rotate( radians(degree) );
                noStroke();
                fill( 'rgb(242, 0, 255)' );
                rect( shapesk, 10, 2, 35 , 105, 5 );

// ----------------------------------------- Change degree position

                degree = degree + 120;

                pop();

// ----------------------------------------- Creates Longer Line that rotates from center

                  push();

                  translate( width*0.5, height*0.5 );
                  rotate( radians(degree) );
                  noStroke();
                  fill( 'rgb(255, 0, 0)' );
                  rect( shapesk, 240, 2000, 1 , 45, 1 );

// ----------------------------------------- Change degree position

                  degree = degree + 150;

                  pop();

// ----------------------------------------- Creates Longer Line that rotates from center

                    push();

                    translate( width*0.5, height*0.5 );
                    rotate( radians(degree) );
                    noStroke();
                    fill( 'rgb(184, 4, 117)' );
                    rect( shapesk, 255, 2000, 2 , 90, 1 );

// ----------------------------------------- Change degree position

                    degree = degree - 150;

                    pop();

// ----------------------------------------- Creates Longer Line that rotates from center

                      push();

                      translate( width*0.5, height*0.5 );
                      rotate( radians(degree) );
                      noStroke();
                      fill( 'rgb(83, 4, 184)' );
                      rect( shapesk, 295, 2000, 5 , 90, 1 );

// ----------------------------------------- Change degree position

                      degree = degree + 100;

                      pop();

// ----------------------------------------- Following the mouse while rotating!
// ----------------------------------------- Creates tiny blue square to follow mousex,mousey

                    noCursor();
                    noStroke();
                    fill( 'rgb(38, 73, 255)' );
                    rect( mouseX, mouseY, 5, 5 );
                    rotate( radians(degree) );

// ----------------------------------------- Creates Pink square that extends as mouse is pulled down

                  noStroke();
                  fill( 'rgb(255, 38, 103)' );
                  rect( mouseX, 5, mouseY, 50, );
                  rotate( radians(degree) );

// ----------------------------------------- Creates purple square that extends as mouse is pulled right

                noStroke();
                fill( 'rgb(134, 38, 255)' );
                rect( mouseY, 5,  50, mouseX, );
                rotate( radians(degree) );

// -----------------------------------------  creates red square that extends as mouse is pulled right

              noStroke();
              fill( 'rgb(255, 38, 38)' );
              rect( mouseY, 50, mouseX, 50,);
              rotate( radians(degree) );

// ----------------------------------------- creates blue square that extends as mouse is pulled down

            noStroke();
            fill( 'rgb(62, 38, 255)' );
            rect(  5, mouseX, mouseY, 50,);
            rotate( radians(degree) );

}
