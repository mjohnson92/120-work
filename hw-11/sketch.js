let anomaly = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();

}

////// M O U S E D R A G //////

function mouseDragged() {
    let a = new Anomaly(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
    anomaly.push(a);
}

////// B A C K G R O U N D //////

function draw() {
    background(0, 20);
    for (let i = 0; i < anomaly.length; i++) {

        anomaly[i].move();
        anomaly[i].show();

    }
}

///////////////////////////
////// A N O M A L Y //////
//////   C L A S S   //////
///////////////////////////

class Anomaly {
    constructor(x, y, x2, y2, x3, y3, x4, y4 ) {
        this.x = x;
        this.y = y;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;

    }

////// M O V E M E N T //////

    move() {
        this.x = this.x + sin(random(50, 100));
        this.y = this.y + cos( 100) - tan( 100);
        this.x2 = this.x2 + sin( random(-30, 50) , PI);
        this.y2 = this.y2 + cos( 100) + cos( 1000);
        this.x3 = this.x3 + sin( random( 50, 800), PI);
        this.y3 = this.y3 + cos( 100) + cos( 100);
        this.x4 = this.x4 + sin( TWO_PI , PI);
        this.y4 = this.y4 + cos( 100) + cos( 1000);
    }

////// A P P E A R E N C E //////

    show() {
        stroke(random(62, 255), random(0,255), 252)
        strokeWeight(random( .5, 1));
        fill(random(62, 255), random(0,255), 252, random(0, 100));
        curve(this.x, this.y, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
        rotate( radians(10) ); 

    }
}
