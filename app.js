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
            'Strengh',
            'Power',
            'Corruption',
            'Culture'],
        correct: 'Strengh',
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


const quizHeader = document.querySelector(".quiz-header");
const answerBody = document.querySelector(".answer-body");

let qLenght = quizzes.length;
let text = "<div>";
for (let i = 0; i < quizzes.length; i++) {
    text += "<h2>" + quizzes[i].question + "</h2>";

    let optLength = quizzes[1].length;
    let opt = "<ul>";
    for (let j = 0; j < 4 ; j++) {
        opt += "<li>" + quizzes[0].options[j] + "</li>";
    }
    "</ul>"
        answerBody.innerHTML = opt;

}

"</div>"
quizHeader.innerHTML = text;


console.log("rice");














