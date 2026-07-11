const canvas=document.getElementById("matrix");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

function mulaiTes(){

alert("Menu pertanyaan akan dibuat di Part 3.");

}

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
