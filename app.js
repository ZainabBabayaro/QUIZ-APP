const quizzes = [
    {
        question: 'Who was the first president of Nigeria?',
        options: [
            'President Muhammadu Buhari',
            'President Olusegun Obasanjo',
            'President Nnamdi Azikuwe',
            'President Goodluck Jonathan'],
        correct: 'President Nnamdi Azikuwe',
    },
    {
        question: 'What is the color of the Nigerian flag?',
        options: [
            'Lilac, White, Blue',
            'Blue, white, Red',
            'Green, White, Green',
            'Yellow, White, Blue'],
        correct: 'Green, White, Green',
    },
    {
        question: 'Who was the first  woman to drive a car?',
        options: [
            'Mrs. Olufunmiloyo Ramsome Kuti',
            'Mrs. Aisha Umar',
            'Miss. Zainab Babayaro',
            'Mrs. Patience Jonathan'],
        correct: 'Miss. Zainab Babayaro',
    },
    {
        question: 'What does the eagle in the Nigerian coat of arms represent?',
        options: [
            'Strength',
            'Power',
            'Corruption',
            'Culture'],
        correct: 'Strength',
    },
    {
        question: 'A cancar worm that has eaten deep into Nigeria symbolizes?',
        options: [
            'Earthworm',
            'Ringworm',
            'Corruption',
            'Way of life'],
        correct: 'Corruption',
    }

]

let question = document.querySelector(".question");
let options = document.querySelector('.answer-body > .options')
let quizHeader = document.querySelector(".quiz-header");
const answerBody = document.querySelector(".answer-body");
const mainContainer = document.querySelector(".main-container");
const submit = document.querySelector(".submit")


function changeQuiz(n) {
    const currentQuestion = quizzes[n]

    question.textContent = currentQuestion.question
    options.innerHTML = ''
    currentQuestion.options.forEach(option => {
        options.innerHTML += `<li class="option-a">
        <input type="radio" name="answer" onchange="selectAnswer(event)">
            <label for="a">${option}</label>
        </li>`
    })

};

changeQuiz(0);

let noOfCorrectCounts = 0
const answer = []
let totalPercentage
let counter = 0

const submitAnswer = () => {
    if (counter === quizzes.length - 1) {
        computeTotalScore()

        return

    }

    if (counter >= answer.length) {
        alert('pick an option')
        return
    }

    counter++
    changeQuiz(counter)
}


const selectAnswer = (event) => {
    const ans = event.target.nextElementSibling.textContent
    answer.push(ans)
    correctOpt(ans)

}

function correctOpt(expectedAns) {
    if (expectedAns === quizzes[counter].correct) {
        noOfCorrectCounts++
    }
}


function computeTotalScore() {
    totalPercentage = `This is the total score ${(noOfCorrectCounts / quizzes.length) * 100} % <br> You got ${noOfCorrectCounts} questions right <br> You failed ${quizzes.length - noOfCorrectCounts} `
    document.getElementById('display-score').innerHTML = totalPercentage
    document.getElementById("quiz-header").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("submit").style.display = "none";
}















