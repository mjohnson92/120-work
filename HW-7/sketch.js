
var ball = {};          //---------------------- Variable ball is an object
ball.width = 200;        //----------------------------------- Ball Diameter
ball.x = 600;            //----------------------------------- Ball X Postion
ball.y = 320;            //----------------------------------- Ball Y Postion
ball.delta_x = 5;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards horizontal and decreases amount of circles
ball.delta_y = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards vertical and decreases amount of circles
ball.scale_x = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards horizontal and decreases amount of circles
ball.scale_y = 1;       //--------- (object quality) also, increase in value, increases speed, flattens ball angle towards vertical and decreases amount of circles

var red = floor( random(256) );
var green = floor( random(256) );
var blue = floor( random(256) );

function setup() {
    createCanvas(windowWidth, windowHeight); //-------------- creates canvas
     frameRate(10000);

}

function draw() {

    var red = floor( random(256) );             //-------------- Random rgb number for var.
    var green = floor( random(256) );           //-------------- Random rgb number for var.
    var blue = floor( random(256) );            //-------------- Random rgb number for var.
    background( red, green, blue );             //-------------- background and color

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

    fill(0);            //------ ball color
    rect(ball.x, ball.y, ball.width, ball.width);                                              //------ sqaure dimensions. X pos, Y pos, width, height
    rect(ball.y, ball.x, ball.width, ball.width);                                              //------ sqaure dimensions. X pos, Y pos, width, height
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 12);    //------- changes direction of ball when clicked near ball
                                                      //------- (convert, low bound, upper bound, target low bound, target up bound)
    ball.scale_y = map(mouseY, 0, height, 0.5, 12);   //------- changes direction of ball when clicked near ball
}                                                     //------- (convert, low bound, upper bound, target low bound, target up bound)
                                                      //------- (0) is left edge of window, (width) is right edge.
                                                      //------- (0) is top edge of window, (height is bottom edge.)
                                                      //------- Mouse x & y are converted from the range .5 to 10.
