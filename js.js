// Forside
const planets = [
    {
        name: 'SOLEN',
        image: 'images/sun.webp',
        description: 'Stjernen i Solsystemet',
        fact: 'Solen er en gul dværg (type G2) og udgør centrum af vores solsystem, hvor den indeholder omkring 99.86% af den samlede masse. Dens enorme gravitation holder de otte planeter og mange andre himmellegemer i bane omkring sig.'
    },
    {
        name: 'MERKUR',
        image: 'images/mercury.webp',
        description: 'Nærmest Solen',
        fact: 'Merkur er den planet, der ligger tættest på Solen, med en gennemsnitlig afstand på cirka 57,91 millioner km. Ekstrem temperatur: Den har ekstremt varierende temperaturer, der kan nå op til 430 grader Celsius om dagen og falde til -180 grader Celsius om natten.'
    },
    {
        name: 'VENUS',
        description: 'Lignende størrelse som Jorden',
        fact: 'Venus er ofte kaldt "Jordens tvilling" på grund af sin lignende størrelse og sammensætning, men dens atmosfære er meget forskelligartet. Tyk atmosfære: Atmosfæren består primært af kuldioxid og svovlsyre, hvilket skaber en ekstrem drivhuseffekt og gør overfladen til den varmeste i solsystemet.',
        image: 'images/venus.webp',
    },
    {
        name: 'JORDEN',
        description: 'Livets hjemsted',
        fact: 'Jorden er den eneste planet kendt for at huse liv, med et varieret klima og store mængder vand. Aktiv pladetektonik: Den har en aktiv pladetektonik, hvilket betyder, at dens overflade konstant ændrer sig gennem geologiske processer.',
         image: 'images/earth.webp',
    },
    {
        name: 'MARS',
        description: 'Rød plante',
        fact: 'Mars kaldes ofte den "røde planet" på grund af jernoxid (rust) på dens overflade, som giver den en rødlig farve. Mulighed for liv: Mars har været genstand for stor interesse i søgen efter liv, da der er fundet spor af vand i form af is og tidligere flydende vand.',
        image: 'images/mars.webp',
    },
    {
        name: 'JUPITER',
        description: 'Største planet',
        fact: 'Jupiter er den største planet i solsystemet og har en diameter på omkring 139.822 km. Mange måner: Den har mere end 79 kendte måner, herunder de fire store måner kaldet Galileiske måner: Io, Europa, Ganymedes og Callisto.',
        image: 'images/jupiter.webp',
    },
    {
        name: 'SATURN',
        description: 'Ringe system',
        fact: 'Saturn er berømt for sine imponerende ringsystemer, der består af ispartikler og små sten. Gasplanet: Som en gasplanet har Saturn ikke en fast overflade; dens atmosfære er primært sammensat af hydrogen og helium.',
        image: 'images/saturn.webp',
    },
    {
        name: 'URANUS',
        description: 'Skæv rotation',
        fact: 'Uranus roterer på sin side med en aksel hældning på omkring 98 grader, hvilket gør dens rotationsakse næsten vandret. Koldest planet: Den har også den laveste temperatur blandt planeterne i solsystemet, med minimumstemperaturer omkring -224 grader Celsius.',
        image: 'images/uranus.webp',
    },
    {
        name: 'NEPTUN',
        description: 'Fjerntliggende planet',
        fact: 'Neptun er den mest fjerntliggende planet i solsystemet og ligger cirka 4,5 milliarder km fra Solen. Vejrfænomener: Den er kendt for sine kraftige vinde og storme, herunder den berømte "Great Dark Spot," som minder om Jordens storme.',
        image: 'images/neptun.webp',
    },
];

// let currentPlanetIndex = 0;

// function updatePlanetDisplay() {
//     const planet = planets[currentPlanetIndex];
//     document.getElementById('planet-image').src = planet.image;
//     document.getElementById('planet-name').textContent = planet.name;
//     document.getElementById('planet-description').textContent = planet.description;
//     document.getElementById('planet-fact').textContent = planet.fact;
// }

// document.querySelector('.prev-btn').addEventListener('click', () => {
//     currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
//     updatePlanetDisplay();
// });

// document.querySelector('.next-btn').addEventListener('click', () => {
//     currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
//     updatePlanetDisplay();
// });

// // Initialize display
// updatePlanetDisplay();


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