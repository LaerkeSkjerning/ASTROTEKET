// Forside
document.addEventListener('DOMContentLoaded', () => {
    const planets = [
        {
            name: 'SOLEN',
            image: 'images/sun.webp',
            description: 'Stjernen i Solsystemet:',
            fact: 'Solen er en gul dværg (type G2) og udgør centrum af vores solsystem, hvor den indeholder omkring 99.86% af den samlede masse.'
        },
        {
            name: 'MERKUR',
            image: 'images/mercury.webp',
            description: 'Nærmest Solen:',
            fact: 'Merkur er den planet, der ligger tættest på Solen, med en gennemsnitlig afstand på cirka 57,91 millioner km.'
        },
        {
            name: 'VENUS',
            image: 'images/venus.webp',
            description: 'Lignende størrelse som Jorden:',
            fact: 'Venus er ofte kaldt "Jordens tvilling" på grund af sin lignende størrelse og sammensætning, men dens atmosfære er meget forskelligartet.'
        },
        {
            name: 'JORDEN',
            image: 'images/earth.webp',
            description: 'Livets hjemsted:',
            fact: 'Jorden er den eneste planet kendt for at huse liv, med et varieret klima og store mængder vand.'
        },
        {
            name: 'MARS',
            image: 'images/mars.webp',
            description: 'Rød planet:',
            fact: 'Mars kaldes ofte den "røde planet" på grund af jernoxid (rust) på dens overflade, som giver den en rødlig farve.'
        },
        {
            name: 'JUPITER',
            image: 'images/jupiter.webp',
            description: 'Største planet:',
            fact: 'Jupiter er den største planet i solsystemet og har en diameter på omkring 139,822 km.'
        },
        {
            name: 'SATURN',
            image: 'images/saturn.webp',
            description: 'Ringe system:',
            fact: 'Saturn er berømt for sine imponerende ringsystemer, der består af ispartikler og små sten.'
        },
        {
            name: 'URANUS',
            image: 'images/uranus.webp',
            description: 'Skæv rotation:',
            fact: 'Uranus roterer på sin side med en aksel hældning på omkring 98 grader, hvilket gør dens rotationsakse næsten vandret.'
        },
        {
            name: 'NEPTUN',
            image: 'images/neptun.webp',
            description: 'Fjernliggende planet:',
            fact: 'Neptun er den mest fjernliggende planet i solsystemet og ligger cirka 4.5 milliarder km fra Solen.'
        }
    ];

    let currentPlanetIndex = 0;
    const planetImage = document.getElementById('planet-image');
    const planetName = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');
    const planetFact = document.getElementById('planet-fact');
    const leftButton = document.querySelector('.nav-btn.left');
    const rightButton = document.querySelector('.nav-btn.right');

    // Update orbit markers to show current position
    function updateOrbitMarkers() {
        const markers = document.querySelectorAll('.orbit-marker');
        markers.forEach((marker, index) => {
            marker.style.background = index === currentPlanetIndex ? '#fff' : 'rgba(255, 255, 255, 0.3)';
        });
    }

    // Display current planet information
    function displayPlanet() {
        const planet = planets[currentPlanetIndex];
        planetImage.src = planet.image;
        planetName.textContent = planet.name;
        planetDescription.textContent = planet.description;
        planetFact.textContent = planet.fact;
        updateOrbitMarkers();
    }

    // Navigation handlers
    leftButton.addEventListener('click', () => {
        currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
        displayPlanet();
    });

    rightButton.addEventListener('click', () => {
        currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
        displayPlanet();
    });

    // Click handlers for orbit markers
    const orbitMarkers = document.querySelectorAll('.orbit-marker');
    orbitMarkers.forEach((marker, index) => {
        marker.addEventListener('click', () => {
            currentPlanetIndex = index;
            displayPlanet();
        });
    });

    // Initialize with first planet
    displayPlanet();
});

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