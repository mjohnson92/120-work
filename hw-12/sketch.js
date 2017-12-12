                    ///////////////////////////////////
                    ////////// W E E K   1 2 //////////
                    ///////////////////////////////////


// create variables
let fireflys = [];
let grass = [];
let stars = [];
let brushes = [];
let lunar = [];
const numOfFireflys = 40;
const numOfStars = 80;
const numOfBrushes = 160;

function setup() {
    createCanvas(windowWidth, windowHeight);


        grass [0] = new Grass( 0, 330, 1400, 20);


    // create a new firefly object of class type "FireFly"
    let init_x = 60;
    let init_y = 60;
    for (let i = 0; i < numOfFireflys; i++) {
        fireflys.push(new FireFly(init_x, init_y));
    // move the starting position over so fireflys do not start on top of one another.
        init_x += 100;
        if (init_x > width) {
            init_x = 90;
            init_y += 120;
        }
    }

    for (let i = 0; i < numOfStars; i++) {
        stars.push(new Star());
    }

    for (let i = 0; i < numOfBrushes; i++) {
        brushes.push(new Brush());
    }
    lunar [0] = new Lunar(600, 24, 300);
    lunar [1] = new Lunar(600, 24, 50);
    lunar [2] = new Lunar(560, 4, 40);
    lunar [3] = new Lunar(600, 76, 58);
    lunar [4] = new Lunar(550, 46, 36);
}

function draw() {
    background('rgb(22, 22, 29)');

    // call the grass's appearence

        grass[0].display();

        for (let i = 0; i < stars.length; i++) {
            stars[i].display();
        }

            lunar[0].display();
            lunar[1].display();
            lunar[2].display();
            lunar[3].display();
            lunar[4].display();

    for (let i = 0; i < fireflys.length; i++) {
        // call the firefly's methods
        fireflys[i].fireflysCheck(fireflys, i);
        fireflys[i].edgeCheck();
        fireflys[i].move();
        fireflys[i].display();
    }

    noCursor();
    noStroke();
    rect(mouseX, mouseY, random(10,25), random(10,25));
    fill('rgb(251, 240, 137)');

    for (let i = 0; i < brushes.length; i++) {
        // call the brush's methods
        brushes[i].display();
    }

}

                ///////////////////////////////////////////
                ////////// L U N A R  C L A S S ///////////
                ///////////////////////////////////////////


class Lunar {
constructor(x1, y1, width ){
this.x1 = x1
this.y1 = y1
this.width = width
}

display() {
push();
noStroke();
fill(random(240, 255));
translate( this.x1, this.y1 );
ellipse(this.x1 , this.y1 , this.width);
pop();

}
}

                /////////////////////////////////////////////////
                ////////// F I R E   F L Y   C L A S S //////////
                /////////////////////////////////////////////////


class FireFly {
    constructor(x, y, size) {
        this.color = ('rgb(251, 245, 159)');
        this.size = random(random(-5, 50), random(-5,50));
        this.rad = this.size / random(-5, 30);
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-1, 5);
        this.deltaY = random(-1, 5);
    }

    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.posX, this.posY);
        rect(random(5,15), 10, random(5,15), random(5,15));
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the firefly has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width && this.color == 'rgb(251, 245, 159)'|| this.posX - this.rad <= 0 && this.color == 'rgb(251, 245, 159)') {
            this.deltaX *= -1;
            this.size =  random(random(-5, 50), random(-5,50));
        }
        // check if the freifly has hit a horizontal wall (top or grass)
        if (this.posY + this.rad >= height -100 && this.color == 'rgb(251, 245, 159)' || this.posY - this.rad <= 0 && this.color == 'rgb(251, 245, 159)') {
            this.deltaY *= -1;
            this.size =  random(-5, 100);
        }
    }


    fireflysCheck(otherFireflys, myId) {

        for (let n = 0; n < otherFireflys.length; n++) {
            if (n != myId) {
                let d = dist(this.posX, this.posY, otherFireflys[n].posX, otherFireflys[n].posY);
                let combinedR = this.rad + otherFireflys[n].rad;

                if (d <= combinedR) {
                    this.deltaX *= -1.5;
                    this.deltaY *= -1.5;

                    if( this.color == 'rgb(251, 245, 159)') {
                        this.color = 'rgb(251, 159, 228)';
                        this.size -=  random(-10, 40);
                    } else {
                        this.color = 'rgb(159, 163, 251)';
                        this.size -=  random(-10, 40); }

                }
            }
        }
    }
}

                /////////////////////////////////////////
                ////////// S T A R   C L A S S //////////
                /////////////////////////////////////////


class Star {
    constructor(x, y, size) {
        this.color = (random(155, 255));
        this.size = random(random(-5, 50), random(-5,50));
        this.rad = this.size / random(-5, 30);
        this.posX = random(0, 1200);
        this.posY = random(0, 550);
        this.deltaX = random(-1, 5);
        this.deltaY = random(-1, 5);
    }

    display() {
        push();
        noStroke();
        fill(this.color);
        translate(this.posX, this.posY);
        rect(random(1,5), random(1,5), random(1,5), random(1,5));
        pop();
    }
}

                ///////////////////////////////////////////
                ////////// G R A S S   C L A S S //////////
                ///////////////////////////////////////////


  class Grass {
  constructor(x1, y1, width, height){
  this.x1 = x1
  this.y1 = y1
  this.width = width
  this.height = height
  }

  display() {
  push();
  noStroke();
  fill(42, random(73, 84), random(65,75));
  translate( this.x1, this.y1 );
  rect( this.x1, this.y1, this.width, this.height );
  pop();

  }
}

                    ///////////////////////////////////////////
                    ////////// B R U S H   C L A S S //////////
                    ///////////////////////////////////////////


class Brush {
constructor(x1, y1, width, height){
this.x1 = x1
this.y1 = y1
this.width = width
this.height = height
}

display() {
push();
noStroke();
fill(42, random(73, 84), random(65,75));
translate( this.x1, this.y1 );
rect(random(1,1300), 660, 10, random(-50,-150));
pop();
}
}
