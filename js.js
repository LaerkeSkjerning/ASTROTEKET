// Forside
const planets = [
    {
        name: 'SOLEN',
        title: 'Stjernen i Solsystemet',
        description: 'Solen er en gul dværg (type G2) og udgør centrum af vores solsystem, hvor den indeholder omkring 99,86% af den samlede masse.',
        image: 'path/to/sun.jpg'
    },
    {
        name: 'MERKUR',
        title: 'Nærmest Solen',
        description: 'Merkur er den planet, der ligger tættest på Solen, med en gennemsnitlig afstand på cirka 57,91 millioner km.',
        image: 'path/to/mercury.jpg'
    },
    // Add other planets...
];


//Mælkeexperiment



//Andreas Mogensen


//Quiz

document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "Hvilken planet er kendt for sine imponerende ringe og har en densitet så lav, at den kunne flyde i et kæmpe badekar?",
            options: ["Neptun", "Saturn", "Uranus"],
            correct: 1
        },
        {
            question: "På hvilken planet finder vi den største vulkan i solsystemet, Olympus Mons?",
            options: ["Mars", "Jupiter", "Jorden"],
            correct: 0
        },
        {
            question: "Hvilken planet ruller nærmest på siden i sin bane omkring Solen med en aksehældning på 98 grader?",
            options: ["Saturn", "Solen", "Uranus"],
            correct: 2
        },
        {
            question: "Hvilken planets atmosfære består primært af kuldioxid og har en overflade varm nok til at smelte bly?",
            options: ["Venus", "Jupiter", "Merkur"],
            correct: 0
        },
        {
            question: "Hvilken planet har den korteste dag i solsystemet, der varer kun omkring 10 timer?",
            options: ["Mars", "Merkur", "Jupiter"],
            correct: 2
        },
        {
            question: "Hvilken af Jupiters måner menes at have et underjordisk hav og betragtes som et muligt sted for liv uden for Jorden?",
            options: ["Europa", "Io", "Ganymedes"],
            correct: 0
        },
        {
            question: "Hvad er navnet på den gigantiske storm på Jupiter, der har raset i over 300 år og er større end Jorden?",
            options: ["Den Store Gule Plet", "Den Store Røde Plet", "Den Store Grønne Plet"],
            correct: 1
        },
        {
            question: "Hvilken planet blev først opdaget ved matematiske beregninger snarere end direkte observation?",
            options: ["Neptun", "Uranus", "Saturn"],
            correct: 0
        },
        {
            question: "Hvor lang tid tager det cirka for solens lys at nå Jorden?",
            options: ["6 minutter og 58 sekunder", "10 minutter og 15 sekunder", "8 minutter og 20 sekunder"],
            correct: 2
        },
        {
            question: "Hvilken proces i Solens kerne er ansvarlig for at producere dens enorme energi?",
            options: ["Kernefusion", "Kemisk forbrænding", "Kernefission"],
            correct: 0
        },
    ];

    let currentQuestion = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz');

    function showQuestion(questionIndex) {
        const questionData = questions[questionIndex];
        
        const questionHTML = `
            <div class="question active" data-question="${questionIndex + 1}">
                <p>${questionData.question}</p>
                <div class="options">
                    ${questionData.options.map((option, index) => `
                        <div class="option" data-index="${index}">
                            <span class="dot"></span>${option}
                        </div>
                    `).join('')}
                </div>
                <button class="next-btn" disabled>→</button>
            </div>
        `;

        quizContainer.innerHTML = questionHTML;

        // Tilføj click handlers til options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', selectOption);
        });

        // Tilføj click handler til next button
        const nextBtn = document.querySelector('.next-btn');
        nextBtn.addEventListener('click', checkAnswerAndProceed);
    }

    function selectOption(e) {
        // Fjern selected class fra alle options
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Tilføj selected class til den valgte option
        e.currentTarget.classList.add('selected');
        
        // Aktiver next-knappen
        document.querySelector('.next-btn').disabled = false;
    }

    function checkAnswerAndProceed() {
        const selectedOption = document.querySelector('.option.selected');
        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.dataset.index);
            if (selectedAnswer === questions[currentQuestion].correct) {
                score++;
            }
        }
        
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            showResults();
        } else {
            showQuestion(currentQuestion);
        }
    }

    function showResults() {
        const resultatHTML = `
            <div class="results">
                <h2>Tak fordi du quizzede med!</h2>
                <p>Du fik ${score} ud af ${questions.length} rigtige svar!</p>
                <button class="restart-btn">Tag quizzen igen</button>
            </div>
        `;
        
        quizContainer.innerHTML = resultatHTML;
        
        // Tilføj click handler til restart-knappen
        document.querySelector('.restart-btn').addEventListener('click', restartQuiz);
    }

    function restartQuiz() {
        currentQuestion = 0;
        score = 0;
        showQuestion(0);
    }

    // Start quizzen ved at vise første spørgsmål
    showQuestion(0);
});