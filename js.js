const questions = document.querySelectorAll('.question');
const nextBtn = document.querySelector('.next-btn');
let currentQuestion = 0;

nextBtn.addEventListener('click', () => {
    questions[currentQuestion].classList.remove('active');
    currentQuestion = (currentQuestion + 1) % questions.length;
    questions[currentQuestion].classList.add('active');
});

// Tilføj klik-funktionalitet til svarmuligheder
const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', () => {
        // Fjern tidligere valgte svar
        options.forEach(opt => opt.style.backgroundColor = '');
        // Marker det valgte svar
        option.style.backgroundColor = '#d4d4d4';
    });
});