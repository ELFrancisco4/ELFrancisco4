const startButton = document.getElementById("start-btn")
const container = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

const nextButton = document.getElementById('next-btn')

nextButton.addEventListener('click', ()=> {
setNextQuestion()
 currentQuestionIndex++
})
let shuffledQuestions, currentQuestionIndex



function startGame(){
   
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    container.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()

}

startButton.addEventListener('click', startGame)

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
         button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
     const selectedButton =  e.target
     const correct =  selectedButton.dataset.correct
     setStatusClass(document.body, correct)
     Array.from(answerButtonElement.children).forEach(button => {
         setStatusClass(button, button.dataset.correct)
     })
     if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
     }else{
         startButton.innerText = 'Restart'
         startButton.classList.remove('hide')
     }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who scored in the 2021 UCL final?',
        answers: [
            {text: 'Kai Havertz', correct: true},
            {text: 'Ederson', correct: false},
           
        ]
    },

    {
        question: 'Who won the last EURO tournament',
        answers: [
            {text: 'England', correct: false},
            {text: 'Portugal', correct: true},
            {text: 'Spain', correct: false},
            {text: 'Germany', correct: false}
        ]
    },
    {
        question: ' 4 + 7?',
        answers: [
            {text: '11', correct: true},
            {text: '13', correct: false},
            {text: '17', correct: false},
            {text: '147', correct: false},
           
        ]
    },
    {
        question: '___ played for both Madrid and Atletico?',
        answers: [
            {text: 'Kane', correct: false},
            {text: 'Beckham', correct: false},
            {text: 'Ronaldo', correct: false},
            {text: 'Marcos Llorente', correct: true},
           
        ]
    },
    {
        question: '___ won 3 ballon dor awards?',
        answers: [
            {text: 'Kai Haverz', correct: false},
            {text: 'Cruyff', correct: true},
            {text: 'Ronaldo', correct: false},
            {text: 'Figo', correct: false},
           
        ]
    },
    {
        question: 'Who scored in the 2020 UCL final?',
        answers: [
            {text: 'Lewandowski', correct: false},
            {text: 'Neymar', correct: false},
            {text: 'Coman', correct: true},
            {text: 'Veratti', correct: false},
           
        ]
    },
    {
        question: 'Who scored in the 2021 UCL final?',
        answers: [
            {text: 'Kai Havertz', correct: true},
            {text: 'Ederson', correct: false},
           
        ]
    },
    {
        question: 'Who is the all-time top scorer in EPL history?',
        answers: [
            {text: 'Alan Shearer', correct: true},
            {text: 'Dwight Yorke', correct: false},
            {text: 'Aguero', correct: false},
            {text: 'Lampard', correct: false},
           
        ]
    },
]

