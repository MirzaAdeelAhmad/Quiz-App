let questions = [
    {
        "ques" : "Who is the Best Leader Of Pakistan ?",
        "a" : "Imran Khan",
        "b" : "Nawaz Sharif",
        "c" : "Asif Ali Zardari",
        "d" : "Shehbaz Sharif",
        "Correct" : "a"
    },
    {
        "ques" : "Who is the captain of Pakistani cricket Taeam ?",
        "a" : "Muhammad Rizwan",
        "b" : "Babar Azam",
        "c" : "Shaheen Afridi",
        "d" : "Shadab Khan",
        "Correct" : "b"
    },
    {
        "ques" : "When winter Comes in Pakistan ?",
        "a" : "June",
        "b" : "Faburary",
        "c" : "August",
        "d" : "December",
        "Correct" : "d"
    },
    {
        "ques" : "What is the National animal Of Pakistan ?",
        "a" : "Lion",
        "b" : "Markor",
        "c" : "Jirafe",
        "d" : "Zibra",
        "Correct" : "b"
    },
    {
        "ques" : "Which city is the Capital Of Pakistan?",
        "a" : "Islamabad",
        "b" : "Lahore",
        "c" : "karachi",
        "d" : "Pindi",
        "Correct" : "a"
    }
];

let quizQuestion = document.getElementById("quizQuestion");
let quizOption = document.querySelectorAll("#option");
let right = 0;
let wrong = 0;
let total = questions.length;


let index = 0;
function quizApp(){
    if(index == total){
        return endQuiz();
    }
    reset();
    let data = questions[index];
    quizQuestion.innerHTML =`${index+1} ) ${data.ques} `;
    quizOption[0].nextElementSibling.innerText = data.a;
    quizOption[1].nextElementSibling.innerText = data.b;
    quizOption[2].nextElementSibling.innerText = data.c;
    quizOption[3].nextElementSibling.innerText = data.d;
}


function submitQuiz(){
   let data = questions[index];
   const ans =  getAnswer();
   if(ans == data.Correct){
    right++;
   }
   else{
    wrong++;
   }
   index++;
   quizApp();
   return;
}

const getAnswer = () =>{
    let answer;
    quizOption.forEach( (input)=>{
        if(input.checked){
            answer = input.value;
        }

    })
    return answer;
}

const reset = () =>{
    quizOption.forEach( (input)=>{
        if(input.checked){
            input.checked = false;
        }

    })
}

function  endQuiz(){
    document.getElementById("box").innerHTML = `
    <h1 style="text-align: center; margin-top: 100px; font-size: 30px;"> QUIZ END </h1>
    <h3 style="text-align: center; margin-top: 15px; "> You Got ${right} / ${total} Marks</h3>

    `;
}

quizApp();
