const qestion = document.querySelector('.qestion')
const answer = document.querySelector('#answer')
const submit = document.querySelector('#submit')
const reload = document.querySelector('.reload')

const qAndA = [
    {
        qestion: 'Capital of Russia',
        correct: 'moscow',
    }, {
        qestion: 'What is the largest planet in the solar system?',
        correct: 'jupiter',
    }, {
        qestion: 'Which bird can swim but cannot fly?',
        correct: 'penguin',
    }, {
        qestion: 'What is the capital of Australia?',
        correct: 'canberra',
    }, {
        qestion: 'What year is it today?',
        correct: '2021'
    }, {
        qestion: 'What does “HTTP” stand for?',
        correct: 'hyperText transfer rotocol',
    }, {
        qestion: 'What year was the very first model of the iPhone released?',
        correct: '2007',
    }, {
        qestion: 'What year did the US enter World War II?',
        correct: '1941',
    },
]

let currentQestion = -1
let correctAnswers = 0

quizLoad ()

function LowerCase () {
    answer.value = answer.value.toLowerCase()
}

submit.addEventListener('click', () => {
    LowerCase ()
    checkAnswer()
    quizLoad()
    answer.value = ''
})

reload.addEventListener('click', () => {
    restart ()
    currentQestion = -1
    quizLoad ()
    document.querySelector('.reload')
    .style.visibility = 'hidden'
})

function quizLoad () {
    answer.value = ''
    currentQestion++
    let currentData = qAndA[currentQestion]
    qestion.innerText = currentData.qestion 
}
function restart () {
    document.querySelector('.reload')
    visibility = 'visible'
    document.querySelector('.correct')
    .innerHTML =''
    answer.style.visibility = 'visible'
    qestion.style.visibility = 'visible'
    submit.style.visibility = 'visible'
}

function checkAnswer () {
    let currentData = qAndA[currentQestion]
    if (answer.value === currentData.correct) {
        correctAnswers++
        if (currentQestion === qAndA.length -1) {
            answer.style.visibility = 'hidden'
            qestion.style.visibility = 'hidden'
            submit.style.visibility = 'hidden'
            document.querySelector('.correct')
            .innerHTML = `You answered : ${correctAnswers} qestions out of <strong> ${qAndA.length} </strong> right!`;
            document.querySelector('.reload')
            .style.visibility = 'visible'
        }
        console.log('right')
    } else if (currentQestion === qAndA.length -1) {
        answer.style.visibility = 'hidden'
        qestion.style.visibility = 'hidden'
        submit.style.visibility = 'hidden'
        document.querySelector('.correct')
        .innerHTML = `You answered : ${correctAnswers} qestions out of <strong> ${qAndA.length} </strong> right!`;
        document.querySelector('.reload')
        .style.visibility = 'visible'
    } else if (answer.value === '') {
        submit.className('disablet')
    };
}
