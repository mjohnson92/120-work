Michael Johnson, 51

[Live Sketch Link](Your Live Link)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

Please describe what the original code is doing.

Why is it working the way it is?

The code works the way it does mostly because of the if statement. It kind of gives the ball a border to bounce off of using the screen width and height.
But you need all previous qualities of the object to be defined appropriately to make it work as well.
The mouse clicked function acts as a realistic push onto the ball when it is clicked near it.


What does each line do?

    var ball = {};          //---------------------- Variable ball is an object
    ball.width = 40;        //----------------------------------- Ball Diameter
    ball.x = 10;            //----------------------------------- Ball X Postion
    ball.y = 10;            //----------------------------------- Ball Y Postion
    ball.delta_x = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards horizontal and decreases amount of circles
    ball.delta_y = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards vertical and decreases amount of circles
    ball.scale_x = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards horizontal and decreases amount of circles
    ball.scale_y = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards vertical and decreases amount of circles

    function setup() {
        createCanvas(windowWidth, 400); //-------------- creates canvas
        background(125);                //-------------- background and color
    }


      function draw() {

      ball.x += ball.delta_x * ball.scale_x;      //-------- Ball x pos adding / assigning change in x multiplied by secondary change in x
                                                  //-------- Ball only runs vertically if 0 change. Needs at least one, greater, increases angle.
      ball.y += ball.delta_y * ball.scale_y;      //-------- Ball y pos adding / assigning change in y multiplied by secondary change in y
                                                  //-------- Ball only runs vertically if 0 change. Needs at least one, greater, increases angle.

      if (ball.x >= width || ball.x <= 0) {

                          // || Logical OR operator, if either true, will be true, if both false, will be false.
                          // if ball postion x is greater than or equal to right edge of window ORRRRR ball position x is less than or equal to 0

          ball.delta_x = -1 * ball.delta_x;
      }
                          // then ball change in x postion = -1 multiplied by -1 to = 1

      if (ball.y >= height || ball.y <= 0) {

                          // || Logical OR operator, if either true, will be true, if both false, will be false.
                          // if ball postion y is greater than or equal to bottom edge of window ORRRRR ball position y is less than or equal to 0

          ball.delta_y = -1 * ball.delta_y;
      }
                          // then ball change in y postion = -1 multiplied by -1 to = 1

      fill(255);                                        //------ ball color
      ellipse(ball.x, ball.y, ball.width, ball.width);  //------ ellipse dimensions. X pos, Y pos, width, height
          }

          function mousePressed() {
              ball.scale_x = map(mouseX, 0, width, 0.5, 10);    //------- changes direction of ball when clicked near ball
                                                                //------- (convert, low bound, upper bound, target low bound, target up bound)
              ball.scale_y = map(mouseY, 0, height, 0.5, 10);   //------- changes direction of ball when clicked near ball
          }                                                     //------- (convert, low bound, upper bound, target low bound, target up bound)
                                                                //------- (0) is left edge of window, (width) is right edge.
                                                                //------- (0) is top edge of window, (height is bottom edge.)
                                                                //------- Mouse x & y are converted from the range .5 to 10.


How can you make the ball change direction?

You can change the direction of the ball, by clicking near the ball itself, it changes its course within the range of .5 - 10.




## How did you alter the sketch?

Please describe how and why you changed the sketch?

I made the size of the shape bigger and changed it to a square.
I changed the color of the shape to black.
Changed the input to 1 from 5 for ball.delta_x = 5; to change angle of the initial starting angle.
Switched the background color to a constantly changing rainbow.
Change Canvas Size.
Editted the starting postion to what i think may be just below the center. ball.x = 600; ball.y = 320;.
Increased the range of the direction able to be changed by clicking near the shape from 10 to 12.
