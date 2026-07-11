/* =================================
   MANIPULATOR INSIGHT
   LOADING SYSTEM
   PART 8
================================= */


let progress = 0;


const bar =
document.getElementById(
"loading-progress"
);


const status =
document.getElementById(
"loading-status"
);



const messages = [

"Initializing System...",

"Loading Neural Database...",

"Scanning Behavior...",

"Reading Pattern...",

"Analyzing Response...",

"System Ready"

];



let step = 0;



let loading = setInterval(()=>{


progress += 2;



bar.style.width =
progress + "%";



if(progress % 20 === 0){

status.innerHTML =
messages[step];


step++;

}



if(progress >= 100){


clearInterval(loading);



document
.getElementById("loading")
.style.opacity="0";



setTimeout(()=>{


document
.getElementById("loading")
.style.display="none";


},1000);



}



},80);
