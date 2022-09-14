let questions = [

{
    "question": "Wie lange geht ein Fußballspiel in der Regel?",
    "answer_1": "80 Minuten",
    "answer_2": "120 Minuten",
    "answer_3": "30 Minuten",
    "answer_4": "90 Minuten",
    "right_answer": 4
},

{
    "question": "Wo befindet sich das größte Stadion Europas?",
    "answer_1": "Barcelona",
    "answer_2": "Berlin",
    "answer_3": "Madrid",
    "answer_4": "Paris",
    "right_answer": 1
},

{
    "question": "Wann wurde die Bundesliga gegründet?",
    "answer_1": "1877",
    "answer_2": "1912",
    "answer_3": "1945",
    "answer_4": "1962",
    "right_answer": 4
},

{
    "question": "Welcher Fußballer hat die Hand Gottes?",
    "answer_1": "Lionel Messi",
    "answer_2": "Diego Maradona",
    "answer_3": "Christiano Ronaldo",
    "answer_4": "Toni Schumacher",
    "right_answer": 2
},
{
    "question": "Wer gewann 1954 die Weltmeisterschaft im Fußball?",
    "answer_1": "Frankreich",
    "answer_2": "Polen",
    "answer_3": "Deutschland",
    "answer_4": "Holland",
    "right_answer": 3
},

];

let rightQuestions = 0;
let currentQuestion = 0;

let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init(){
    document.getElementById('question-size').innerHTML = questions.length;

    showQuestion();

}

function startGame(){
    document.getElementById('start-game').style = 'display: none';

}

function showQuestion(){

    

    // show end screen 
    if (currentQuestion >= questions.length) {

        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        document.getElementById('nav-display-none').style = 'display: none';


        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;

        
    } else {  
        // show question

        let percent = currentQuestion  / questions.length; 
        percent = percent * 100;                                                    
        document.getElementById('progress-bar').innerHTML = `${percent}% `;
        document.getElementById('progress-bar').style =  `width: ${percent}%; `;

    
        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;

        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}



// wählt die richtige Antwort aus, aus den Fragen 


function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
   

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    
    if(selectedQuestionNumber == question['right_answer']){ 
     
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play(); 
        rightQuestions++;

    }   else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAIL.play();
        
        
    }

    document.getElementById('next-button').disabled = false; 
}

function nextQuestion(){

    currentQuestion++;
    document.getElementById('next-button').disabled = true;  
    
    resetAnswerButton();
    showQuestion(); 

}


function resetAnswerButton(){

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');

}

function restartGame(){

    document.getElementById('question-body').style = ''; // 
    document.getElementById('nav-display-none').style = ''; 
    document.getElementById('end-screen').style = 'display: none'; 
 
    rightQuestions = 0;
    currentQuestion = 0;
    init();

}

