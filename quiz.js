
// var naam = prompt('Enter Name')
// sessionStorage.setItem('name', naam)

var questions = [
    {
        question: 'which of the following planets in our solar system is known as the "red planet"?',
        option1: 'Earth',
        option2: 'Mars',
        option3: 'Jupiter',
        correctOption: "Mars"
    },
    {
        question: 'What is the largest mammal on Earth',
        option1: 'Blue Whale',
        option2: 'Elephant',
        option3: 'loin',
        correctOption: "Blue Whale"
    },
    {
        question: 'which of the following colors is often associated with love and passion',
        option1: 'Blue',
        option2: 'Green',
        option3: 'Red',
        correctOption: "Red"
    },
    {
        question: 'Which is the smallest bone in human body?',
        option1: 'Femur',
        option2: 'Rib',
        option3: 'Stapes',
        correctOption: "Stapes"
    },
    {
        question: 'Which of the following planets in our solar system is closest to the sun',
        option1: 'Earth',
        option2: 'Mercury',
        option3: 'Saturn',
        correctOption: 'Mercury'
    },
    {
        question: 'Which of the following  popular social media platforms is known for its short messages (called "tweets")',
        option1: 'Twitter',
        option2: 'Facebook',
        option3: 'Instagram',
        correctOption: 'Twitter'
    },
    {
        question: 'Which of the following famous caetoon characters is a yellow canary with a big smile',
        option1: 'Bugs Bunny',
        option2: 'Tweety Bird',
        option3: 'Mickey Mouse',
        correctOption: "Tweety Bird"
    },
    {
        question: 'Which of the following musical instruments is often used to play the melody in a band?',
        option1: 'Drums',
        option2: 'Guiter',
        option3: 'Saxophone',
        correctOption: 'Saxophone'
    },
    {
        question: 'What is the largest continent on earth',
        option1: 'Asia',
        option2: 'Africa',
        option3: 'Europe',
        correctOption: 'Asia'
    },
    {
        question: 'Which of the following is a popular type of computer software',
        option1: 'Microsoft Office',
        option2: 'Google Chrome',
        option3: 'Google Docs',
        correctOption: 'Microsoft Office'
    }
]


var ques = document.getElementById('question')
var index = 0
var btn = document.getElementById('btn')
var score = 0
var arr;
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')




var interval;
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var min = 4
var sec = 60


interval = setInterval(function () {
    sec--
    getsec.innerHTML = sec
    if (sec < 0) {
        min--
        getmin.innerHTML = min
        sec = 60
        getsec.innerHTML = sec
    }
    else if (min == 0 && sec == 0) {
        arr = (score / questions.length) * 100
        sessionStorage.setItem('scoress', arr)
        location.href = 'result.html'
    }
}, 1000)

setTimeout(function () {
    clearInterval(interval)
}, 300000)


function nextQuestion() {
    var options = document.getElementsByName('ans')
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            var selectedNumber = options[i].value
            var selectedAnswer = questions[index - 1][`option${selectedNumber}`]
            var correctOption = questions[index - 1].correctOption
            if (selectedAnswer == correctOption) {
                score++
            }

        }
        options[i].checked = false
        btn.disabled = true
    }
    if (index > questions.length - 1) {
        clearInterval(interval)
        arr = (score / questions.length) * 100
        sessionStorage.setItem('scoress', arr)
        location.href = 'result.html'
    }
    else {
        ques.innerText = questions[index].question
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++
    }


}

nextQuestion()

function btnClick() {
    btn.disabled = false
}