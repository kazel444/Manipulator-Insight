/* =========================================
   MANIPULATOR INSIGHT
   MATRIX RAIN SYSTEM
   PART 5 - MATRIX.JS
========================================= */


const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");


// ukuran layar

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;



// karakter matrix

const characters =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&*+-";


const fontSize = 16;

let columns = canvas.width / fontSize;


// posisi jatuhan

let drops = [];

for(let i = 0; i < columns; i++){

    drops[i] = 1;

}



// animasi matrix

function drawMatrix(){


    // efek jejak transparan

    ctx.fillStyle = "rgba(0,0,0,0.08)";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );



    ctx.font =
    fontSize + "px monospace";



    for(let i = 0; i < drops.length; i++){


        const text =
        characters[
            Math.floor(
                Math.random() *
                characters.length
            )
        ];



        let x =
        i * fontSize;


        let y =
        drops[i] * fontSize;



        ctx.fillStyle =
        "#00ffff";



        ctx.fillText(
            text,
            x,
            y
        );



        // reset jika turun bawah

        if(
            y >
            canvas.height &&
            Math.random() > 0.975
        ){

            drops[i]=0;

        }



        drops[i]++;

    }



}



setInterval(
    drawMatrix,
    50
);




// responsive

window.addEventListener(
"resize",
()=>{


canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



columns =
canvas.width /
fontSize;



drops=[];


for(
let i=0;
i<columns;
i++
){

drops[i]=1;

}


});
