/* =========================================
   MANIPULATOR INSIGHT
   CYBER BACKGROUND SYSTEM
   PART 6 - BACKGROUND.JS
========================================= */


const bgCanvas = document.createElement("canvas");

bgCanvas.id = "backgroundFX";

document.body.appendChild(bgCanvas);


const bg = bgCanvas.getContext("2d");



function resizeBG(){

    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;

}

resizeBG();


window.addEventListener(
"resize",
resizeBG
);





// ==========================
// PARTICLE SYSTEM
// ==========================


let particles = [];

const particleCount = 80;



class Particle{


constructor(){

    this.x =
    Math.random() *
    bgCanvas.width;


    this.y =
    Math.random() *
    bgCanvas.height;


    this.size =
    Math.random()*3+1;


    this.speed =
    Math.random()*0.6+0.2;


    this.opacity =
    Math.random();

}



update(){


    this.y -= this.speed;



    if(this.y < 0){

        this.y =
        bgCanvas.height;

        this.x =
        Math.random() *
        bgCanvas.width;

    }


}



draw(){


    bg.beginPath();


    bg.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI*2
    );


    bg.fillStyle =
    `rgba(0,255,255,${this.opacity})`;


    bg.fill();



}


}





for(
let i=0;
i<particleCount;
i++
){

particles.push(
new Particle()
);

}





// ==========================
// CYBER MASK
// ==========================


let mask = {


x:0,

y:0,

size:180,

angle:0

};





function drawMask(){


    bg.save();



    bg.translate(
        mask.x,
        mask.y
    );



    bg.rotate(
        mask.angle
    );



    bg.font =
    "150px Arial";



    bg.fillStyle =
    "rgba(0,255,255,0.05)";



    bg.fillText(
        "🎭",
        -75,
        50
    );



    bg.restore();



}





// ==========================
// ANIMATION
// ==========================


function animateBackground(){


    bg.clearRect(
        0,
        0,
        bgCanvas.width,
        bgCanvas.height
    );



    // particles

    particles.forEach(
    p=>{

        p.update();

        p.draw();

    });



    // mask movement


    mask.x =
    bgCanvas.width/2 +
    Math.sin(Date.now()*0.0005)
    *200;



    mask.y =
    bgCanvas.height/2;



    mask.angle =
    Math.sin(Date.now()*0.001)
    *0.2;



    drawMask();



    requestAnimationFrame(
        animateBackground
    );

}



animateBackground();
