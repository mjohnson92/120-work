let curseWidth = [ 300, 400, 500, 600, 625];  // ---- array with cursor widths

function setup() {
  createCanvas( windowWidth, windowHeight);
  frameRate(50);
  noCursor();                                  // ------------- No Cursor
  noStroke();
}

function draw() {
  background('rgb(0, 0, 0)');

  shape(windowWidth*.5, windowHeight*.5, -50);    // ------ defined functions with parameters. translation and degree.
  shape(windowWidth*.5, windowHeight*.5, 50);
  shape(windowWidth*.5, windowHeight*.5, -230);
  shape(windowWidth*.5, windowHeight*.5, 230);

    shape(windowWidth*.5+5, windowHeight*.5, -50);
    shape(windowWidth*.5+5, windowHeight*.5, 50);
    shape(windowWidth*.5+5, windowHeight*.5, -230);
    shape(windowWidth*.5+5, windowHeight*.5, 230);

      shape(windowWidth*.5-5, windowHeight*.5, -50);
      shape(windowWidth*.5-5, windowHeight*.5, 50);
      shape(windowWidth*.5-5, windowHeight*.5, -230);
      shape(windowWidth*.5-5, windowHeight*.5, 230);

        shapecirc(windowWidth*.5, windowHeight*.5, -50);
        shapecirc(windowWidth*.5, windowHeight*.5, 50);
        shapecirc(windowWidth*.5, windowHeight*.5, -230);
        shapecirc(windowWidth*.5, windowHeight*.5, 230);

          shapecirc(windowWidth*.5+5, windowHeight*.5, -50);
          shapecirc(windowWidth*.5+5, windowHeight*.5, 50);
          shapecirc(windowWidth*.5+5, windowHeight*.5, -230);
          shapecirc(windowWidth*.5+5, windowHeight*.5, 230);

            shapecirc(windowWidth*.5-5, windowHeight*.5, -50);
            shapecirc(windowWidth*.5-5, windowHeight*.5, 50);
            shapecirc(windowWidth*.5-5, windowHeight*.5, -230);
            shapecirc(windowWidth*.5-5, windowHeight*.5, 230);

              shapecurv(windowWidth*.5, windowHeight*.5, -50);
              shapecurv(windowWidth*.5, windowHeight*.5, 50);
              shapecurv(windowWidth*.5, windowHeight*.5, -230);
              shapecurv(windowWidth*.5, windowHeight*.5, 230);

            shapecurv(windowWidth*.5+5, windowHeight*.5, -50);
            shapecurv(windowWidth*.5+5, windowHeight*.5, 50);
            shapecurv(windowWidth*.5+5, windowHeight*.5, -230);
            shapecurv(windowWidth*.5+5, windowHeight*.5, 230);

          shapecurv(windowWidth*.5-5, windowHeight*.5, -50);
          shapecurv(windowWidth*.5-5, windowHeight*.5, 50);
          shapecurv(windowWidth*.5-5, windowHeight*.5, -230);
          shapecurv(windowWidth*.5-5, windowHeight*.5, 230);

        middle(windowWidth*.5, windowHeight*.5, -50);
        middle(windowWidth*.5, windowHeight*.5, 50);
        middle(windowWidth*.5, windowHeight*.5, -230);
        middle(windowWidth*.5, windowHeight*.5, 230);

      middle(windowWidth*.5+5, windowHeight*.5, -50);
      middle(windowWidth*.5+5, windowHeight*.5, 50);
      middle(windowWidth*.5+5, windowHeight*.5, -230);
      middle(windowWidth*.5+5, windowHeight*.5, 230);

    middle(windowWidth*.5-5, windowHeight*.5, -50);
    middle(windowWidth*.5-5, windowHeight*.5, 50);
    middle(windowWidth*.5-5, windowHeight*.5, -230);
    middle(windowWidth*.5-5, windowHeight*.5, 230);   // ------ defined functions

    if (windowWidth-curseWidth[0] >= mouseX && mouseX >= curseWidth[0] ) {  // -------- line appears at stated pixels within the screen
          for (var x = 0; x <= mouseButton; x += 15)    // -------- for loop will run til mouse is clicked
          {

        line(windowWidth*.5, random(0,500), windowWidth*.5, random(height, height - 500));  // -------- creates lines randominzing lengths
        line(random(0,500), windowHeight*.5, random(width, width - 500), windowHeight*.5);
        stroke('rgb(255, 46, 46)');

        line(windowWidth*.5+5, random(0,500), windowWidth*.5+5, random(height, height - 500));
        line(random(0,500), windowHeight*.5+5, random(width, width - 500), windowHeight*.5+5);
        stroke('rgb(255, 46, 46)');

        line(windowWidth*.5-5, random(0,500), windowWidth*.5-5, random(height, height - 500));
        line(random(0,500), windowHeight*.5-5, random(width, width - 500), windowHeight*.5-5);
        stroke('rgb(255, 46, 46)');

            if (curseWidth[1] >= mouseX && mouseX >= curseWidth[1] ) {  // -------- line appears at stated pixels within the screen
                  for (var x = 0; x <= mouseButton; x += 15)    // -------- for loop will run til mouse is clicked
                  {

            line(windowWidth*.5, random(0,500), windowWidth*.5, random(height, height - 500));      // -------- creates lines randominzing lengths
            line(random(0,500), windowHeight*.5, random(width, width - 500), windowHeight*.5);
            stroke('rgb(255, 46, 46)');

            line(windowWidth*.5+10, random(0,500), windowWidth*.5+10, random(height, height - 500));
          line(random(0,500), windowHeight*.5+10, random(width, width - 500), windowHeight*.5+10);
            stroke('rgb(255, 46, 46)');

            line(windowWidth*.5-10, random(0,500), windowWidth*.5-10, random(height, height - 500));
            line(random(0,500), windowHeight*.5-10, random(width, width - 500), windowHeight*.5-10);
            stroke('rgb(255, 46, 46)');

}}}}}

    function shape(pos_x, pos_y, degree) {                                    // -------- function creation, along with adjustable parameters

      if (windowWidth-curseWidth[0] >= mouseX && mouseX >= curseWidth[0] ) {  // -------- Shape appears at stated pixels within the screen
            for (var x = 0; x <= mouseButton; x += 15)    // -------- for loop will run til mouse is clicked
            {
              push();
              translate( pos_x, pos_y );                      // --------- translates and variables pos_x, pos_y
              rotate( radians(degree) );                      // --------- rotates and specific degree
              stroke('rgb(255, 46, 46)');                     // --------- shape stroke color
              fill( 'rgb(0, 0, 0)' );                         // --------- shape fill color
              quad( 0, 50, 15, random(1, 500), 0, 5, 0, 10);  // --------- quad dimensions, random lengths on some points.
              degree += 0;                                    // --------- update degree
              pop();

}}}

      function shapecirc(pos_x, pos_y, degree) {

        if (windowWidth-curseWidth[2] >= mouseX && mouseX >= curseWidth[2] ) {
              for (var x = 0; x <= mouseButton; x += 15)
              {
                push();
                translate( pos_x, pos_y );
                rotate( radians(degree) );
                noFill();
                stroke('rgb(255, 46, 46)');
                curve( 0, 500, 15, random(1, 500), 0, 5, 10, random(0, 110)); // ------- curve! not quad.
                pop();
}}}

      function shapecurv(pos_x, pos_y, degree) {

        if (windowWidth-curseWidth[3] >= mouseX && mouseX >= curseWidth[3] ) {
              for (var x = 0; x <= mouseButton; x += 15)
              {
                push();
                translate( pos_x, pos_y );
                rotate( radians(degree) );
                noFill();
                stroke('rgb(255, 46, 46)');
                curve( 0, 500, 15, random(1, 500), 10, 5, 10, random(0, 110));
                degree += 0;
                pop();

}}}

    function middle(pos_x, pos_y, degree) {

      if (windowWidth-curseWidth[4] >= mouseX && mouseX >= curseWidth[4] ) {
            for (var x = 0; x <= mouseButton; x += 15)
            {
              push();
              translate( pos_x, pos_y );
              rotate( radians(degree) );
              noFill();
              stroke('rgb(255, 46, 46)');
              ellipse( 10, 10, random(0,15), 1500);                               // -------- ellipse!
              degree += 0;
              pop();

}}}
