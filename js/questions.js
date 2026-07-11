const questions = [

{
question:"Apakah orang ini sering membuatmu merasa bersalah agar mengikuti keinginannya?",
category:"Emotional"
},

{
question:"Apakah orang ini sering memutarbalikkan fakta ketika sedang salah?",
category:"Gaslighting"
},

{
question:"Apakah orang ini membuatmu meragukan ingatanmu sendiri?",
category:"Gaslighting"
},

{
question:"Apakah orang ini sering mengingkari janji tanpa merasa bersalah?",
category:"Integrity"
},

{
question:"Apakah orang ini sering berbohong demi keuntungan pribadi?",
category:"Deception"
},

{
question:"Apakah orang ini sering memanfaatkan rasa kasihan orang lain?",
category:"Victim"
},

{
question:"Apakah orang ini berusaha mengontrol keputusanmu?",
category:"Control"
},

{
question:"Apakah orang ini sering menyalahkan orang lain atas kesalahannya sendiri?",
category:"Gaslighting"
},

{
question:"Apakah orang ini sering memanfaatkan kelemahanmu?",
category:"Exploitation"
},

{
question:"Apakah orang ini membuatmu takut jika tidak mengikuti keinginannya?",
category:"Control"
}

];

/* =================================
   MANIPULATOR INSIGHT
   QUESTION ENGINE
   PART 9.3
================================= */


let currentQuestion = 0;

let totalScore = 0;



const questionBox =
document.getElementById("question-box");


const questionText =
document.getElementById("question-text");


const answersContainer =
document.getElementById("answers");



const progressBar =
document.getElementById("progress");





function startTest(){


    document
    .querySelector(".container")
    .innerHTML += `

    <div class="question-box">

        <h2 id="question-text">
        </h2>

        <div id="answers">
        </div>


        <div class="progress-container">

            <div 
            id="progress"
            class="progress">
            </div>

        </div>


        <p id="question-number">
        </p>


    </div>

    `;


    showQuestion();


}

function showQuestion(){


    let data =
    questions[currentQuestion];



    document
    .getElementById("question-text")
    .innerHTML =
    data.question;



    let answersHTML="";



    data.options.forEach(
    (option,index)=>{


        answersHTML += `

        <button 
        class="answer"
        onclick="selectAnswer(${index})">

        ${option.text}

        </button>

        `;


    });



    document
    .getElementById("answers")
    .innerHTML =
    answersHTML;



    updateProgress();


}





function selectAnswer(index){


    let selected =
    questions[currentQuestion]
    .options[index];



    totalScore +=
    selected.score;



    currentQuestion++;



    if(
    currentQuestion >= questions.length
    ){

        showResult();

        return;

    }



    showQuestion();


}





function updateProgress(){


    let percent =
    (
        currentQuestion /
        questions.length
    )
    *100;



    document
    .getElementById("progress")
    .style.width =
    percent+"%";



}





function showResult(){


    document
    .querySelector(".container")
    .innerHTML = `


    <div class="result">

        <h1>
        ANALYSIS COMPLETE
        </h1>


        <h2>
        SCORE:
        ${totalScore}
        </h2>


    </div>


    `;


}
