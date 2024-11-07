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



const planetData = {
    solen: {
        basics: {
            position: "Centrum af solsystemet",
            size: "Diameter på 1,4 millioner km - over 100 gange større end Jorden",
            discovery: "Har været kendt siden menneskehedens begyndelse"
        },
        atmosphere: [
            "Fotosfæren: Solens synlige overflade med en temperatur på omkring 5.500°C",
            "Solpletter: Mørkere, koldere områder på Solens overflade",
            "Soludbrud: Voldsomme eksplosioner der kan påvirke Jordens magnetfelt"
        ],
        structure: [
            "Kernefusion: I Solens kerne smelter brintatomer sammen til helium ved 15 millioner grader Celsius",
            "Energiproduktion: Hvert sekund omdannes over 4 millioner ton stof til energi",
            "Masseforbrug: Har forbrugt omkring 100 jordmasser til energi"
        ],
        moons: [
            "Solen har ingen måner",
            "Holder alle planeter og andre objekter i kredsløb med sin massive tyngdekraft",
            "Indeholder 99,86% af solsystemets samlede masse"
        ],
        facts: [
            "Solens lys bruger cirka 8 minutter og 20 sekunder på at nå Jorden",
            "Solen roterer hurtigere ved ækvator end ved polerne",
            "Solens magnetfelt skifter polaritet cirka hvert 11. år"
        ],
        exploration: [
            "Observeres konstant af forskellige rumteleskoper og -sonder",
            "Parker Solar Probe er den første sonde der 'rører' ved Solen",
            "Solar Orbiter undersøger Solens poler"
        ]
    },
    merkur: {
        basics: {
            position: "Den planet, der ligger tættest på Solen, med en gennemsnitlig afstand på 57,91 millioner km",
            size: "Den mindste planet i solsystemet - tænk på den som en overvokset måne",
            discovery: "Kendt siden oldtiden"
        },
        atmosphere: [
            "Ingen egentlig atmosfære - kun en meget tynd eksosfære",
            "Ingen beskyttelse mod solens stråling eller meteornedslag",
            "Ekstreme temperatursvingninger fra 450°C om dagen til -150°C om natten"
        ],
        structure: [
            "Overfladen er dækket af kratere og stenørkener",
            "Har en overraskende stor jernkerne i forhold til sin størrelse",
            "Ingen tektonisk aktivitet"
        ],
        moons: [
            "Merkur har ingen måner",
            "Den mindste og inderste planet i solsystemet",
            "Har et svagt magnetfelt trods sin størrelse"
        ],
        facts: [
            "En dag på Merkur varer omkring 59 jorddage",
            "Har det mest excentriske kredsløb af alle planeter",
            "Roterer meget langsomt om sin egen akse"
        ],
        exploration: [
            "NASA's MESSENGER-mission har kortlagt hele planeten",
            "BepiColombo-missionen er på vej til Merkur",
            "Udfordrende at udforske på grund af den intense varme fra Solen"
        ]
    },
    venus: {
        basics: {
            position: "Den anden planet fra Solen, ca. 108 millioner km væk",
            size: "Næsten lige så stor som Jorden - kun 650 km mindre i diameter",
            discovery: "Kendt siden oldtiden som 'morgenstjernen' eller 'aftenstjernen'"
        },
        atmosphere: [
            "Ekstremt tyk atmosfære bestående af 96% kuldioxid",
            "Skyer af svovlsyre - det regner bogstaveligt talt syre",
            "Voldsom drivhuseffekt der giver temperaturer på 460°C"
        ],
        structure: [
            "Fast klippeoverflade med over 1000 vulkaner",
            "To store højlandsområder - Aphrodite Terra og Ishtar Terra",
            "Aktiv vulkanisme og mulig tektonisk aktivitet"
        ],
        moons: [
            "Venus har ingen måner",
            "Roterer baglæns sammenlignet med de fleste andre planeter",
            "Et døgn på Venus er længere end dens år"
        ],
        facts: [
            "Den varmeste planet i solsystemet på grund af drivhuseffekten",
            "Atmosfærisk tryk 92 gange højere end på Jorden",
            "Mulige spor af liv i atmosfæren (fosfin)"
        ],
        exploration: [
            "Sovjetunionens Venera-missioner landede på overfladen",
            "NASA's Magellan-mission kortlagde overfladen med radar",
            "Fremtidige missioner planlægges for at undersøge muligt liv i atmosfæren"
        ]
    },

    jorden: {
        basics: {
            position: "Den tredje planet fra Solen, i den beboelige zone",
            size: "Diameter på cirka 12.742 km",
            discovery: "Vores hjemplanet, kendt siden menneskets oprindelse"
        },
        atmosphere: [
            "Atmosfæren består hovedsageligt af nitrogen (78%) og ilt (21%)",
            "Beskytter livet ved at blokere skadelig stråling fra solen",
            "Komplekst vejrsystem med skyer, regn og vind"
        ],
        structure: [
            "Aktiv pladetektonik skaber bjerge, oceaner og jordskælv",
            "Indre kerne af jern omgivet af en flydende ydre kerne",
            "71% af overfladen er dækket af vand"
        ],
        moons: [
            "Én naturlig måne, der påvirker tidevandet",
            "Månen blev dannet for omkring 4,5 milliarder år siden",
            "Den eneste naturlige satellit omkring Jorden"
        ],
        facts: [
            "Den eneste kendte planet med flydende vand på overfladen",
            "Huser millioner af forskellige arter",
            "Har et beskyttende magnetfelt skabt af den flydende jernkerne"
        ],
        exploration: [
            "Konstant udforsket af satellitter og rumstationer",
            "Mennesker har boet kontinuerligt i rummet siden 2000",
            "Den mest udforskede planet i solsystemet"
        ]
    },
    mars: {
        basics: {
            position: "Den fjerde planet fra Solen, cirka 227 millioner km væk",
            size: "Omkring halvdelen af Jordens størrelse med en diameter på 6.791 km",
            discovery: "Kendt siden oldtiden og synlig med det blotte øje"
        },
        atmosphere: [
            "Tynd atmosfære bestående primært af kuldioxid (95%)",
            "Ekstreme temperatursvingninger fra 20°C til -140°C",
            "Ofte store støvstorme der kan vare i måneder"
        ],
        structure: [
            "Olympus Mons - solsystemets højeste bjerg",
            "Valles Marineris - et kæmpe canyon-system",
            "Rød overflade på grund af jernoxid (rust) i klipperne"
        ],
        moons: [
            "To små måner: Phobos og Deimos",
            "Phobos kredser så tæt på Mars at den vil styrte ned om millioner af år",
            "Begge måner menes at være indfangede asteroider"
        ],
        facts: [
            "Tidligere flydende vand på overfladen",
            "Mulig forekomst af underjordisk vand i dag",
            "En dag (sol) varer 24 timer og 37 minutter"
        ],
        exploration: [
            "Flere rovere har udforsket overfladen, inklusiv Perseverance og Curiosity",
            "Første succesfulde landing var Viking 1 i 1976",
            "Fremtidige planer om bemandet mission til Mars"
        ]
    },
    jupiter: {
        basics: {
            position: "Den femte planet fra Solen",
            size: "Den største planet med en diameter på 142.984 km (11 gange større end Jorden)",
            discovery: "Kendt siden oldtiden og synlig med det blotte øje"
        },
        atmosphere: [
            "Består hovedsageligt af hydrogen (90%) og helium (10%)",
            "Den Store Røde Plet - en gigantisk storm der har raset i over 350 år",
            "Kraftige vindstrømme der kan nå op på 680 km/t"
        ],
        structure: [
            "Ingen fast overflade - en gasplanet",
            "Mulig lille fast kerne omgivet af metallisk hydrogen",
            "Mere end dobbelt så massiv som alle andre planeter tilsammen"
        ],
        moons: [
            "92 kendte måner, hvoraf de fire største er de Galileiske måner",
            "Europa har muligvis et underjordisk hav",
            "Io er den mest vulkansk aktive krop i solsystemet"
        ],
        facts: [
            "En dag varer kun 9,93 timer - den hurtigst roterende planet",
            "Har det stærkeste magnetfelt af alle planeter",
            "Et år varer cirka 11,86 jordår"
        ],
        exploration: [
            "Udforsket af flere rumsonder, inklusiv Pioneer, Voyager og Galileo",
            "Juno-missionen kredser currently om planeten",
            "ESA's JUICE-mission på vej til at udforske de Galileiske måner"
        ]
    },
    saturn: {
        basics: {
            position: "Den sjette planet fra Solen",
            size: "Anden største planet med en diameter på 120.536 km",
            discovery: "Kendt siden oldtiden på grund af sin synlighed fra Jorden"
        },
        atmosphere: [
            "Primært hydrogen (96%) og helium (3%)",
            "Kraftige vinde op til 1.800 km/t",
            "Farverige striber skabt af forskellige gasser og temperaturer"
        ],
        structure: [
            "Gasplanet med en mulig fast kerne",
            "Så lav densitet at den kunne flyde i et gigantisk vandbad",
            "Kompleks indre struktur med lag af metallisk hydrogen"
        ],
        moons: [
            "Over 80 kendte måner, med Titan som den største",
            "Titan har en tyk atmosfære og metansøer",
            "Enceladus har vandrige gejsere fra et underjordisk ocean"
        ],
        facts: [
            "Berømt for sit spektakulære ringsystem",
            "Ringene er kun omkring 10 meter tykke",
            "En dag varer cirka 10,7 timer, mens et år er 29,5 jordår"
        ],
        exploration: [
            "Cassini-missionen udforskede systemet i 13 år (2004-2017)",
            "Huygens-sonden landede på Titan i 2005",
            "Første besøg var Pioneer 11 i 1979"
        ]
    },
    uranus: {
        basics: {
            position: "Den 7. planet fra Solen, cirka 2,9 milliarder km væk",
            size: "Den tredjestørste planet med en diameter på 51.118 km",
            discovery: "Opdaget af William Herschel i 1781"
        },
        atmosphere: [
            "Primært brint og helium, med metan der giver den blågrønne farve",
            "Ekstreme vinde op til 900 km/t",
            "Koldeste planetariske atmosfære med temperaturer ned til -224°C"
        ],
        structure: [
            "Isgigant med en kerne af klippe og is",
            "Ingen fast overflade, men lag af forskellige gasser",
            "Unik skæv rotation med en hældning på 98 grader"
        ],
        moons: [
            "27 kendte måner, alle opkaldt efter karakterer fra Shakespeare",
            "De fem største er Miranda, Ariel, Umbriel, Titania og Oberon",
            "13 svage planetringe opdaget i 1977"
        ],
        facts: [
            "Roterer 'sidelæns' gennem sin bane omkring Solen",
            "En dag varer cirka 17 timer",
            "Et år på Uranus er 84 jordår langt"
        ],
        exploration: [
            "Kun besøgt én gang af Voyager 2 i 1986",
            "Studeres primært af jordbaserede og rumbaserede teleskoper",
            "Ingen planlagte missioner i den nærmeste fremtid"
        ]
    },

    neptun: {
        basics: {
            position: "Den 8. og yderste planet i solsystemet, cirka 4,5 milliarder km fra Solen.",
            size: "Omkring 4 gange større end Jorden med en diameter på 49.244 km.",
            discovery: "Første planet opdaget ved matematiske beregninger i 1846."
        },
        atmosphere: [
            "Sammensætning: Primært brint, helium og metan. Metanen giver Neptun sin intense blå farve.",
            "Ekstreme storme: Neptun har nogle af solsystemets vildeste orkaner, der kan vare i op til 10 år.",
            "Vindhastigheder: De højeste i solsystemet - op til 2.100 km/t! Det er hurtigere end lydens hastighed på Jorden."
        ],
        structure: [
            "Isgigant: Ligesom Uranus er Neptun en 'isgigant' uden fast overflade.",
            "Kerne: En lille kerne af is og klippe omgivet af en kappe af metangas, ammoniak og vands.",
            "Varmeproduktion: Neptun producerer over dobbelt så meget varme, som den modtager fra Solen."
        ],
        moons: [
            "Triton: Neptuns største måne, med en af de koldeste overflader i solsystemet.",
            "Antal måner: 14 kendte måner i alt.",
            "Ringsystem: Neptun har fire tynde ringe, opdaget af Voyager 2 i 1989."
        ],
        facts: [
            "Et år på Neptun varer omkring 165 jordår.",
            "Neptun roterer om sig selv på ca. 18 timer.",
            "Planetens magnefelt hælder 50 grader i forhold til rotationsaksen, hvilket skaber komplekse magnetiske forhold."
        ],
        exploration: [
            "Voyager 2: Den eneste rumsonde, der har besøgt Neptun, fløj forbi i 1989.",
            "Den Store Mørke Plet: En gigantisk storm fotograferet af Voyager 2, lignende Jupiters Store Røde Plet."
        ]
    }
};

function updatePlanetInfo(planetName) {
    const planet = planetData[planetName.toLowerCase()];
    if (!planet) return;

    // Opdater basics
    document.getElementById('planet-basics-list').innerHTML = `
        <li>${planet.basics.position}</li>
        <li>${planet.basics.size}</li>
        <li>${planet.basics.discovery}</li>
    `;

    // Opdater atmosfære
    document.getElementById('planet-atmosphere-list').innerHTML = 
        planet.atmosphere.map(item => `<li>${item}</li>`).join('');

    // Opdater struktur
    document.getElementById('planet-structure-list').innerHTML = 
        planet.structure.map(item => `<li>${item}</li>`).join('');

    // Opdater måner
    document.getElementById('planet-moons-list').innerHTML = 
        planet.moons.map(item => `<li>${item}</li>`).join('');

    // Opdater fakta
    document.getElementById('planet-facts-list').innerHTML = 
        planet.facts.map(item => `<li>${item}</li>`).join('');

    // Opdater udforskning
    document.getElementById('planet-exploration-list').innerHTML = 
        planet.exploration.map(item => `<li>${item}</li>`).join('');
}

// Lyt efter klik på orbit-markers eller navigation buttons
document.querySelectorAll('.orbit-marker').forEach((marker, index) => {
    marker.addEventListener('click', () => {
        const planets = ['solen', 'merkur', 'venus', 'jorden', 'mars', 'jupiter', 'saturn', 'uranus', 'neptun'];
        updatePlanetInfo(planets[index]);
    });
});

// Initialiser med første planet
updatePlanetInfo('solen');