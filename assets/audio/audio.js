/* =========================================
   MANIPULATOR INSIGHT
   CYBER AUDIO SYSTEM
   PART 7 - AUDIO.JS
========================================= */


const bgMusic = new Audio(
"assets/audio/cyber.mp3"
);


const clickSound = new Audio(
"assets/audio/click.mp3"
);



bgMusic.loop = true;

bgMusic.volume = 0.35;

clickSound.volume = 0.5;



let musicActive = false;



// ============================
// MUSIC CONTROL
// ============================


function toggleMusic(){


    if(!musicActive){


        bgMusic.play();


        musicActive = true;


        document
        .getElementById("musicBtn")
        .innerHTML =
        "🔊 MUSIC ON";


    }

    else{


        bgMusic.pause();


        musicActive=false;


        document
        .getElementById("musicBtn")
        .innerHTML =
        "🔇 MUSIC OFF";


    }


}





// ============================
// VOLUME
// ============================


function changeVolume(value){


    bgMusic.volume =
    value;


}





// ============================
// BUTTON CLICK SOUND
// ============================


document.addEventListener(
"click",
(e)=>{


    if(
    e.target.tagName === "BUTTON"
    ){

        clickSound.currentTime=0;

        clickSound.play();

    }


});
