function setup() {
    // create a canvas to draw on
    createCanvas( 600, 800 );
}

function draw() {

    // this is my background
    background( 'rgb(194, 210, 223)' );

    // Main Sandbox!!!!!

    push();

    // set canvas to center of grid x:0 y:0

    translate( 300,400 );

    // --------------------------------- Background Characteristics

    // --------------------------------- Clouds (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rect( -300, -650, 800, 50 );
    pop();

    // --------------------------------- Clouds End

    // --------------------------------- Building 1 (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(68, 68, 73)' );
    noStroke();
    rect( -200, -500, 100, 600 );
    pop();

    // --------------------------------- Building 1 End

    // --------------------------------- Building 2 (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(35, 35, 50)' );
    noStroke();
    rect( -105, -700, 100, 600 );
    pop();

    // --------------------------------- Building 2 End

    // --------------------------------- Building 3 (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(75, 65, 69)' );
    noStroke();
    rect( 50, -700, 100, 600 );
    pop();

    // --------------------------------- Building 3 End

    // --------------------------------- Building 4 (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(65, 71, 75)' );
    noStroke();
    rect( 100, -500, 100, 600 );
    pop();

    // --------------------------------- Building 4 End

    // --------------------------------- Building 5 (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(24, 31, 32)' );
    noStroke();
    rect( 180, -700, 100, 600 );
    pop();

    // --------------------------------- Building 5 End

    // --------------------------------- Concrete (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(130, 130, 130)' );
    noStroke();
    rect( -300, -200, 1000, 600 );
    pop();

    // --------------------------------- Concrete End

    // --------------------------------- Pavement (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(0, 0, 0)' );
    noStroke();
    rect( -300, -150, 1000, 600 );
    pop();

    // --------------------------------- Pavement Ends

    // --------------------------------- Street Line (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rect( -300, -15, 800, 20 );
    pop();

    // --------------------------------- Street Line Ends

    // --------------------------------- Hedge (rectangle)

    push();
    translate( 0, 250 );
    fill( 'rgb(40, 79, 49)' );
    noStroke();
    rect( -300, -200, 1000, -50 );
    pop();

    // --------------------------------- Hedge End

    // --------------------------------- Background Characteristics End

    // --------------------------------- Body

    // --------------------------------- Shirt

    // --------------------------------- Top shirt (ellipse)

    push();
    translate( 0, 245 );
    fill( 'rgb(50, 23, 34)' );
    noStroke();
    ellipse( 0, 0, 350, 270 );
    pop();

    // --------------------------------- Bottom shirt (rectangle)

    push();
    translate( -151, 250 );
    fill( 'rgb(50, 23, 34)' );
    noStroke();
    rect( 0, 0, 305, 270 );
    pop();

    // ---------------------------------- Sleeve right (rectangle)

    push();
    translate( -23, 260 );
    rotate( radians(-30) );
    fill( 'rgb(50, 23, 34)' );
    noStroke();
    rect( 133, 30, 60, 400 );
    pop();

    // ---------------------------------- Sleeve right (rectangle)

    push();
    translate( 50, 210 );
    rotate( radians(28) );
    fill( 'rgb(50, 23, 34)' );
    noStroke();
    rect( -195, 80, 60, 400 );
    pop();

    // ---------------------------------- Neck in Shirt (ellipse)

    push();
    translate( 21, 70 );
    fill( 'rgb(244, 217, 200)' );
    noStroke();
    rotate( radians(0) );
    ellipse( -20, 80, 140, 110 );
    pop();

    // ---------------------------------- Neck (rectangle)

    push();//neck
    translate( 10, 250);
    fill( 'rgb(244, 217, 200)' );
    noStroke();
    rotate( radians(-90) );
    rect( 100, -60, 150, 103 );
    pop();

    //----------------------------------- Body End

    //----------------------------------- Skull

    // ---------------------------------- Beard (ellipse)

    push();
    translate( 0, 250);
    fill( 'rgb(52, 28, 22)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 240, 0, 220, 160 );
    pop();

    // --------------------------------- Hair (ellipse)

    push();
    translate( -250, -50);
    fill( 'rgb(52, 28, 22)' );
    noStroke();
    ellipse( 250, 0, 160, 180 );
    pop();

    // --------------------------------- Head (ellipse)

    push();
    translate( 0, 250);
    fill( 'rgb(244, 217, 200)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 250, 0, 220, 160 );
    pop();

    // --------------------------------- Main Beard (semicircle)

    push();
    translate( 0, 250);
    fill( 'rgb(52, 28, 22)' );
    noStroke();
    arc( 0, -200, 142, 142, 0, PI );
    pop();

    // --------------------------------- Main beard End

    // --------------------------------- Mustache (two quads)

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    quad( 0, 5, -5, 20, -50, 25, -55, 20 );
    scale( -1, 1 );
    quad( 0, 5, -5, 20, -50, 25, -55, 20 );
    pop();

    // ----------------------------------Mustache END

    // --------------------------------- Goatee (rectangles & triangles)

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    rect( 36, 20, 15, 30 );
    pop();

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    rect( -51, 20, 15, 30 );
    pop();

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    triangle( 50, 20, 70, 50, 50, 50 );
    scale( -1, 1 );
    triangle( 50, 20, 70, 50, 50, 50 );
    pop();

    // --------------------------------- Skull End

    // --------------------------------- Ears

    // --------------------------------- Ear left (ellipses)

    push()
    translate( 0, 240);
    fill( 'rgb(244, 217, 200)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 260, -75, 55, 40 );
    pop();

    push();
    translate( 0, 240);
    fill( 'rgb(0, 0, 0)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 240, -82, 5, 5 );
    pop();

    // --------------------------------- Ear right (ellipses)

    push()
    translate( 0, 240);
    fill( 'rgb(244, 217, 200)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 260, 75, 55, 40 );
    pop();

    push();
    translate( 0, 240);
    fill( 'rgb(0, 0, 0)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 240, 82, 5, 5 );
    pop();

    //---------------------------------- Ears End

    //---------------------------------- Sideburns (rectangles)

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    rect( -75, -69, 12, 120);
    scale( -1, 1 );
    rect( -75, -69, 12, 120);
    pop();

    //---------------------------------- Sideburns End

    // --------------------------------- Eyebrows (quads)

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    quad( -5, -35, -10, -45, -50, -50, -55, -45 );
    scale( -1, 1 );
    quad( -5, -35, -10, -45, -50, -50, -55, -45 );
    pop();

    // --------------------------------- Eyebrows End

    // --------------------------------- Hairstyle (triangles)

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    triangle( -50, -120, 50, -120, 0, -80 );
    pop();

    push();
    noStroke();
    fill( 'rgb(52, 28, 22)' );
    triangle( -50, -120, 50, -120, 0, -150 );
    pop();

    // --------------------------------- Hairstyle End

    // --------------------------------- Nose (triangles)

    push();
    noStroke();
    fill( 'rgb(194, 163, 143)' );
    triangle( -20, 3, 15, 3, 0, -35 );
    pop();

    push();
    noStroke();
    fill( 'rgb(228, 191, 168)' );
    triangle( -15, 3, 15, 3, 0, -35 );
    pop();

    // --------------------------------- Nose End

    // --------------------------------- Mouth (rectangle with round corners)

    push();
    noStroke();
    fill( 'rgb(98, 57, 57)' );
    rect( -35, 25, 70, 20, 90 );
    pop();

    // --------------------------------- Teeth (rectangles)

    push();
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rect( -28, 25, 55, 5);
    pop();

    push();
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rect( -28, 40, 55, 5);
    pop();

    // --------------------------------- Teeth End

    // --------------------------------- Mouth End

    // --------------------------------- Left Eye (ellipses)

    push();
    translate( -33, -25);
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 18, 33 );
    pop();

    push();
    translate( -33, -25);
    fill( 'rgb(60, 78, 82)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 15, 17.5 );
    pop();

    push();
    translate( -33, -25);
    fill( 'rgb(0, 0, 0)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 10, 10 );
    pop();

    push();
    translate( -36, -25);
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 2, 2 );
    pop();

    // --------------------------------- Left Eye End

    // --------------------------------- Right Eye (ellipses)

    push();
    translate( 33, -25);
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 18, 33 );
    pop();

    push();
    translate( 33, -25);
    fill( 'rgb(60, 78, 82)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 15, 17.5 );
    pop();

    push();
    translate( 33, -25);
    fill( 'rgb(0, 0, 0)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 10, 10 );
    pop();

    push();
    translate( 30, -25);
    fill( 'rgb(255, 255, 255)' );
    noStroke();
    rotate( radians(-90) );
    ellipse( 0, 0, 2, 2 );
    pop();

    // --------------------------------- Right Eye End

    pop();

    // --------------------------------- Sandbox End

  }
