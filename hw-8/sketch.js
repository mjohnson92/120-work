                                      // ------------- Set up canvas
let shapeshape = 10                   // ------------- Variables
var degree = 50
var moveout = 10
function setup() {
    createCanvas( windowWidth, windowHeight );  // --- canvas size to entire window
    frameRate( 500 );                 // ------------- frame rate
    noCursor();                       // ------------- No Cursor
    noStroke();
}

function draw () {
  background( 'rgb(0 , 0 , 0 )' );    // -------------- Background Color

  if (windowWidth-100 >= mouseX && mouseX >= 100 ) {  // -------- Shape appears 100 pixels within the screen
        for (var x = 0; x <= mouseButton; x += 15)    // -------- for loop will run til mouse is clicked
        {
          push();
          translate( width*0.5, height*0.5 );         // -------- translates to center of rotation
          rotate( radians(degree) );                  // -------- rotates at stated amount
          noStroke();                                 // -------- no stroke on quad
          fill( 'rgb(49, 40, 128)' );                 // -------- quad color
          quad( shapeshape , moveout, 40, 15 , 155, 25, moveout, 10 );  // --------- quad dimensions, var dimensions change over time
          degree += 100;                              // -------- degree change
          pop();

          // ----------------------------------------- Creates Line that rotates

    if (keyIsPressed === true) {      // ------- key on keyboard must be pressed for shape to appear
        for (var x = 0; x <= mouseButton; x += 15) // -------- for loop will run til mouse is clicked
        {
          push();
          translate( width*0.5, height*0.5 );       // -------- translates to center of rotation
          rotate( radians(degree) );                // -------- rotates at stated amount
          noStroke();                               // -------- no stroke on quad
          fill( 'rgb(213, 32, 70)' );               // -------- quad color
          quad( shapeshape , moveout, 80, 15 , 155, 25, moveout, 10 ); // --------- quad dimensions, var dimensions change over time
          degree += 50;                             // -------- degree change
          pop();

          // ----------------------------------------- Creates Line that rotates
}}}
moveout += .01 // ------------------------------------ updates moveout size to update size of stated dimension of quad
}                                         // --------- rinse repeat :)

        if (windowWidth-200 >= mouseX && mouseX >= 200 ) {
        for (var x = 0; x <= mouseButton; x += 15)
        {
          push();
          translate( width*0.5, height*0.5 );
          rotate( radians(degree) );
          noStroke();
          fill( 'rgb(67, 56, 161)' );
          quad( shapeshape , moveout, 160, 15 , 155, 25, moveout, 10 );
          degree += 165;
          pop();

          if (keyIsPressed === true) {
          for (var x = 0; x <= mouseButton; x += 15)
          {
            push();
            translate( width*0.5, height*0.5 );
            rotate( radians(degree) );
            noStroke();
            fill( 'rgb(195, 29, 64)' );
            quad( shapeshape , moveout, 120, 15 , 155, 25, moveout, 10 );
            degree += 100;
            pop();

}}}
moveout += .01
}

          if (windowWidth-300 >= mouseX && mouseX >= 300 ) {
                for (var x = 0; x <= mouseButton; x += 15)
                {
                  push();
                  translate( width*0.5, height*0.5 );
                  rotate( radians(degree) );
                  noStroke();
                  fill( 'rgb(90, 79, 184)' );
                  quad( shapeshape , moveout, 240, 15 , 155, 25, moveout, 10 );
                  degree += 140;
                  pop();

            if (keyIsPressed === true) {
                for (var x = 0; x <= mouseButton; x += 15)
                {
                  push();
                  translate( width*0.5, height*0.5 );
                  rotate( radians(degree) );
                  noStroke();
                  fill( 'rgb(167, 24, 54)' );
                  quad( shapeshape , moveout, 200, 15 , 155, 25, moveout, 10 );
                  degree += 50;
                  pop();

}}}
moveout += .01
}

        if (windowWidth-400 >= mouseX && mouseX >= 400 ) {
              for (var x = 0; x <= mouseButton; x += 15)
              {
                push();
                translate( width*0.5, height*0.5 );
                rotate( radians(degree) );
                noStroke();
                fill( 'rgb(49, 40, 128)' );
                quad( shapeshape , moveout, 320, 15 , 155, 25, moveout, 10 );
                degree += 160;
                pop();

          if (keyIsPressed === true) {
              for (var x = 0; x <= mouseButton; x += 15)
              {
                push();
                translate( width*0.5, height*0.5 );
                rotate( radians(degree) );
                noStroke();
                fill( 'rgb(213, 32, 70)' );
                quad( shapeshape , moveout, 280, 15 , 155, 25, moveout, 10 );
                degree += 50;
                pop();

}}}
moveout += .01
}

      if (windowWidth-500 >= mouseX && mouseX >= 500 ) {
          for (var x = 0; x <= mouseButton; x += 15)
          {
            push();
            translate( width*0.5, height*0.5 );
            rotate( radians(degree) );
            noStroke();
            fill( 'rgb(67, 56, 161)'  );
            quad( shapeshape , moveout, 360, 15 , 155, 25, moveout, 10 );
            degree += 10;
            pop();


        if (keyIsPressed === true) {
            for (var x = 0; x <= mouseButton; x += 15)
            {
              push();
              translate( width*0.5, height*0.5 );
              rotate( radians(degree) );
              noStroke();
              fill( 'rgb(195, 29, 64)' );
              quad( shapeshape , moveout, 400, 15 , 155, 25, moveout, 10 );
              degree += 160;
              pop();

}}}
moveout += .01
}

    if (windowWidth-600 >= mouseX && mouseX >= 600 ) {
          for (var x = 0; x <= mouseButton; x += 15)
          {
            push();
            translate( width*0.5, height*0.5 );
            rotate( radians(degree) );
            noStroke();
            fill( 'rgb(90, 79, 184)' );
            quad( shapeshape , moveout, 440, 15 , 155, 25, moveout, 10 );
            degree += 15;
            pop();

      if (keyIsPressed === true) {
          for (var x = 0; x <= mouseButton; x += 15)
          {
            push();
            translate( width*0.5, height*0.5 );
            rotate( radians(degree) );
            noStroke();
            fill( 'rgb(167, 24, 54)' );
            quad( shapeshape , moveout, 480, 15 , 155, 25, moveout, 10 );
            degree += 195;
            pop();

}}}
moveout += .01
}}
