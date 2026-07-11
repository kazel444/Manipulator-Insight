let current=0;

let selected=[];

let personName="";

function mulaiTes(){

personName=document.getElementById("nama").value;

if(personName==""){

alert("Masukkan nama terlebih dahulu.");

return;

}

document.querySelector(".container").style.display="none";

document.getElementById("quizPage").style.display="flex";

renderQuestion();

}

function renderQuestion(){

let q=questions[current];

document.getElementById("questionNumber").innerHTML=

"Soal "+(current+1)+" / "+questions.length;

document.getElementById("questionText").innerHTML=q.question;

document.getElementById("progress").style.width=

((current+1)/questions.length*100)+"%";

let html="";

const pilihan=[

"Tidak Pernah",

"Jarang",

"Kadang",

"Sering",

"Selalu"

];

for(let i=1;i<=5;i++){

html+=`

<div class="answer ${selected[current]==i?"selected":""}"

onclick="choose(${i})">

${pilihan[i-1]}

</div>

`;

}

document.getElementById("answers").innerHTML=html;

}

function choose(v){

selected[current]=v;

renderQuestion();

}

function nextQuestion(){

if(selected[current]==null){

alert("Pilih jawaban dahulu.");

return;

}

if(current<questions.length-1){

current++;

renderQuestion();

}else{

alert("Halaman hasil akan dibuat pada Part 4.");

}

}

function prevQuestion(){

if(current>0){

current--;

renderQuestion();

}

}
