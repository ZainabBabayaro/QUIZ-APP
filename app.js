const quizzes = [
    {
        question: 'Who was the first president of Nigeria?',
        options: [
            a = 'President Muhammadu Buhari',
            b = 'President Olusegun Obasanjo',
            c = 'President Nnamdi Azikuwe',
            d = 'President Goodluck Jonathan'],
        correct: c
    },
    {
        question: 'What is the color of the Nigerian flag?',
        options: [
            a = 'Lilac, White, Blue',
            b = 'Blue, white, Red',
            c = 'Green, White, Green',
            d = 'Yellow, White, Blue'],
        correct: c
    },
    {
        question: 'Who was the first president of Nigeria?',
        options: [
            a = 'Mrs. Olufunmiloyo Ramsome Kuti',
            b = 'Mrs. Aisha Umar',
            c = 'Miss. Zainab Babayaro',
            d = 'Mrs. Patience Jonathan'],
        correct: c
    },
    {
        question: 'What does the eagle in the Nigerian coat of arms represent?',
        options: [
            a = 'Strengh',
            b = 'Power',
            c = 'Corruption',
            d = 'Culture'],
        correct: a
    },
    {
        question: 'A cancar worm that has eaten deep into Nigeria symbolizes?',
        options: [
            a = 'Earthworm',
            b = 'Ringworm',
            c = 'Corruption',
            d = 'Way of life'],
        correct: c
    }

]



let question = document.querySelector(".question");
const quizHeader = document.querySelector(".quiz-header");

let qLenght = quizzes.length;
 let text = "<div>";
 for (let i = 0; i < quizzes.length; i++) {
   text += "<h2>" + quizzes[i].question + "</h2>";
   //question += quizzes.length[i];
 }
 
 "</div>"
 quizHeader.innerHTML = text;


console.log("rice");









// const options = document.querySelector(".options");
// const a = document.getElementById("a");
// const b = document.getElementById("b");
// const c = document.getElementById("c");
// const d = document.getElementById("d");








