//change me whenever reload yes
function setup() {
	var height = 500;
	var width = 500;
	createCanvas(width, height);
	background(100);
}
var keys = [
	
];
keyPressed = function() {
	keys[keyCode] = true;
}
keyReleased = function() {
	keys[keyCode] = false;
}
var a = Math.PI;
var ack = Math.PI;
var ax = 0
var ay = 0;
var time = 0


var aax = [
	
];
var aay = [
	
];
var aas = [
		
];
var aaoff = [
	
];

//the fun stuff :)))))))

var plrW = 4 //be even or else it doesnt like it
var bW = 4 //be even or else it doesnt like it
var size = 60;
var speed = 0.1
var rotatespeed = 0; //funny
var current;
var maxcool = 10;
var cooldown = maxcool;
var aps = 2;
var died = false;
var very = 0

function update() {
	time++;
	very++; //will be used later
	if (maxcool>7) {
		maxcool -= 0.025
	}
	if (rotatespeed<0.09001) {
		rotatespeed += 0.000015
	}
	ax = Math.sin(a) * size + width/2 - plrW/2;
	ay = Math.cos(a) * size + height/2 - plrW/2;
	if ((keys[37] && keyCode == 37) || (keys[37] && !keys[39])) {
		a+=speed;
	} else if ((keys[39] && keyCode == 39) || (keys[39] && !keys[37])) {
		a-=speed;
	}
	
	
	cooldown --;
	if (cooldown < 1) {
		cooldown = maxcool;
		aas.push(360)
		aaoff.push(Math.random() * (3.1415*2));
		aax.push(0);
		aay.push(0);
	}
	
	a += rotatespeed
	ack += rotatespeed
	
	
	
	for (i=0;i<aas.length;i++) {
		aas[i] -= aps;
		aax[i] = Math.sin(ack + aaoff[i]) * aas[i] + width/2  - bW/2;
		aay[i] = Math.cos(ack + aaoff[i]) * aas[i] + height/2  - bW/2;
		if (ax < aax[i] + bW && ax > aax[i] - plrW && ay > aay[i] - plrW && ay < aay[i] + bW) {
			died = true
		}
		if (aas[i]<0) {
			aax.splice(i,1)
			aay.splice(i,1)
			aas.splice(i,1)
			aaoff.splice(i,1)
		}
	}
}
function draw() {	
	background(0,0,0,1000);
	fill(255,0,0)
	text(Math.round((time/60 + Number.EPSILON) * 100) / 100,20,20)
	if (keys[8]) {
		console.log("funny");
		died = false;
		time = 0;
		maxcool = 10;
		rotatespeed = 0;
		a = Math.PI;
		ack = Math.PI;
		ax = 0;
		ay = 0;
		aax = [
	
		];
		aay = [
	
		];
		aas = [
		
		];
		aaoff = [
	
		];
		
		
	}
	if (died == false) {
		update();
		
		noStroke()
		fill(255,255,255);
		for (i=0;i<aas.length;i++) {
			rect(aax[i], aay[i], bW,bW);
		}
		fill(150,0,0);
		rect(ax, ay, plrW, plrW);
		fill(255,100,0);
		ellipse(width/2,height/2,50,50);
	}
}
