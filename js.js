// Forside



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
            correct: 1
        },
        {
            question: "Hvilken planets atmosfære består primært af kuldioxid og har en overflade varm nok til at smelte bly?",
            options: ["Venus", "Jupiter", "Markur"],
            correct: 1
        },
        {
            question: "Hvilken planet har den korteste dag i solsystemet, der varer kun omkring 10 timer?",
            options: ["Mars", "Markur", "Jupiter"],
            correct: 1
        },
        {
            question: "Hvilken af Jupiters måner menes at have et underjordisk hav og betragtes som et muligt sted for liv uden for Jorden?",
            options: ["Europa", "Io", "Ganymedes"],
            correct: 1
        },
        {
            question: "Hvad er navnet på den gigantiske storm på Jupiter, der har raset i over 300 år og er større end Jorden?",
            options: ["Den Store Gule Plet", "Den Store Røde Plet", "Den Store Grønne Plet"],
            correct: 2
        },
        {
            question: "Hvilken planet blev først opdaget ved matematiske beregninger snarere end direkte observation?",
            options: ["Neptun", "Uranus", "Saturn"],
            correct: 1
        },
        {
            question: "Hvor lang tid tager det cirka for solens lys at nå Jorden?",
            options: ["6 minutter og 58 sekunder", "10 minutter og 15 sekunder", "8 minutter og 20 sekunder"],
            correct: 3
        },
        {
            question: "Hvilken proces i Solens kerne er ansvarlig for at producere dens enorme energi?",
            options: ["Kernefusion", "Kemisk forbrænding", "Kernefission"],
            correct: 1
        },
    ];

    let currentQuestion = 0;
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
                <button class="next-btn">→</button>
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
        nextBtn.addEventListener('click', nextQuestion);
    }

    function selectOption(e) {
        // Fjern selected class fra alle options
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        
        // Tilføj selected class til den valgte option
        e.currentTarget.classList.add('selected');
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            currentQuestion = 0; // Start forfra hvis vi er nået til enden
        }
        showQuestion(currentQuestion);
    }

    // Start quizzen ved at vise første spørgsmål
    showQuestion(0);
});