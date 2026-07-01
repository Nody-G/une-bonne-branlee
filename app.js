// ================= AUDIO SYNTHESIS ENGINE =================
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Play a satisfying slap sound (combines low frequency thud + white noise snap)
function playSlapSound() {
    if (!soundEnabled) return;
    initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const t = audioCtx.currentTime;
    
    // 1. Synthesize the flesh impact (white noise burst)
    const bufferSize = audioCtx.sampleRate * 0.08; // 80ms duration
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        // Random white noise filtered exponentially to decay fast
        const decay = Math.exp(-i / (bufferSize * 0.3));
        data[i] = (Math.random() * 2 - 1) * decay;
    }
    
    const noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = buffer;
    
    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(1000, t);
    noiseFilter.frequency.exponentialRampToValueAtTime(150, t + 0.08);
    noiseFilter.Q.setValueAtTime(1.5, t);
    
    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.7, t);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.08);
    
    noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);
    
    // 2. Synthesize the body thud (bass oscillator pitch slide)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(180, t);
    // Dynamic pitch slide downwards to simulate heavy impact thud
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.12);
    
    oscGain.gain.setValueAtTime(0.9, t);
    oscGain.gain.exponentialRampToValueAtTime(0.01, t + 0.12);
    
    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);
    
    // Trigger playback
    noiseNode.start(t);
    noiseNode.stop(t + 0.08);
    osc.start(t);
    osc.stop(t + 0.12);
}

// Play a disappointing "fail" sound (descending sad slide)
function playFailSound() {
    if (!soundEnabled) return;
    initAudio();
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(120, t);
    osc.frequency.linearRampToValueAtTime(40, t + 0.35);
    
    gainNode.gain.setValueAtTime(0.4, t);
    gainNode.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(t);
    osc.stop(t + 0.35);
}

// Play a triumphant end fanfare
function playWinFanfare() {
    if (!soundEnabled) return;
    initAudio();
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5 arpeggio
    const t = audioCtx.currentTime;
    
    notes.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.value = freq;
        
        gainNode.gain.setValueAtTime(0.15, t + index * 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, t + index * 0.1 + 0.25);
        
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        osc.start(t + index * 0.1);
        osc.stop(t + index * 0.1 + 0.25);
    });
}

// ================= GAME LOGIC & STATE =================
const ONOMATOPOEIAS = [
    "PAF !", "TARTINE !", "BING !", "CLAC !", "T'AS MAL ?", "DANS TA TRONCHE !",
    "BIM !", "POW !", "MANCHETTE !", "GIFLE !", "TCHAK !", "K.O. !"
];

const RANKS = [
    { min: 0, max: 10, title: "Victime professionnelle", desc: "Tu as peur du conflit au point d'excuser la moisissure. Ressaisis-toi, tes phalanges s'endorment !" },
    { min: 11, max: 40, title: "Bisounours timide", desc: "Tu distribues des baffes avec la timidité d'un hamster sous calmants. Ils méritent bien plus de fermeté !" },
    { min: 41, max: 70, title: "Distributeur du dimanche", desc: "Pas mal, tu as le sens de la justice mais tu laisses encore passer trop de bobos et d'influenceurs." },
    { min: 71, max: 90, title: "Terreur des relous", desc: "Excellent. Les mecs en trottinette et les profs de yoga te contournent dans la rue. Un vrai justicier moderne." },
    { min: 91, max: 99, title: "Moissonneuse-batteuse de baffes", desc: "Impressionnant ! Tu es une machine de guerre. Les phalanges en feu, le regard acier, tu purges la société de ses parasites." },
    { min: 100, max: 100, title: "Légende de la gifle divine", desc: "Le score parfait. Un dieu vivant de la mornifle. Chuck Norris a demandé ton autographe. Absolument légendaire." }
];

let questionIds = [];
let currentIndex = 0;
let score = 0;
let combo = 0;
let maxCombo = 0;

// Elements
const screens = {
    home: document.getElementById('screen-home'),
    game: document.getElementById('screen-game'),
    result: document.getElementById('screen-result')
};

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const soundToggle = document.getElementById('sound-toggle');
const situationText = document.getElementById('situation-text');
const option1Btn = document.getElementById('option-1');
const option2Btn = document.getElementById('option-2');
const option1Text = document.getElementById('option-1-text');
const option2Text = document.getElementById('option-2-text');
const questionProgress = document.getElementById('question-progress');
const scoreCounter = document.getElementById('score-counter');
const comboCounter = document.getElementById('combo-counter');
const progressBar = document.getElementById('progress-bar');
const slapOverlay = document.getElementById('slap-overlay');
const quizCardContainer = document.getElementById('quiz-card-container');

// Result elements
const finalScore = document.getElementById('final-score');
const rankBadge = document.getElementById('rank-badge');
const resultEvaluation = document.getElementById('result-evaluation');
const statSwipes = document.getElementById('stat-swipes');
const statMaxCombo = document.getElementById('stat-max-combo');

// ================= UTILS & HELPERS =================
function showScreen(screenName) {
    Object.keys(screens).forEach(name => {
        if (name === screenName) {
            screens[name].classList.add('active');
        } else {
            screens[name].classList.remove('active');
        }
    });
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ================= GAME SETUP & PLAYING =================
function initGame() {
    initAudio();
    // Build array of IDs 1 to 100 and shuffle them
    const ids = Array.from({ length: 100 }, (_, i) => i + 1);
    questionIds = shuffleArray(ids);
    currentIndex = 0;
    score = 0;
    combo = 0;
    maxCombo = 0;
    
    scoreCounter.textContent = '0';
    comboCounter.textContent = 'X0';
    comboCounter.style.textShadow = 'none';
    
    loadQuestion();
    showScreen('game');
}

async function loadQuestion() {
    if (currentIndex >= questionIds.length) {
        endGame();
        return;
    }
    
    const questionId = questionIds[currentIndex];
    
    // Update progress HUD
    questionProgress.textContent = `${currentIndex + 1} / ${questionIds.length}`;
    progressBar.style.width = `${(currentIndex / questionIds.length) * 100}%`;
    
    // Fetch question JSON dynamically
    try {
        const response = await fetch(`questions/q_${questionId}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load question ${questionId}`);
        }
        const question = await response.json();
        
        // Set situation text
        situationText.textContent = question.situation;
        
        // Randomize button positions (Option 1 vs Option 2)
        const isOption1Correct = Math.random() < 0.5;
        
        // Clear slapped/clicked states
        quizCardContainer.className = '';
        option1Btn.className = 'option-btn card-inner';
        option2Btn.className = 'option-btn card-inner';
        
        if (isOption1Correct) {
            option1Text.textContent = "Une bonne branlée";
            option2Text.textContent = question.alternative;
            
            option1Btn.dataset.correct = "true";
            option2Btn.dataset.correct = "false";
        } else {
            option1Text.textContent = question.alternative;
            option2Text.textContent = "Une bonne branlée";
            
            option1Btn.dataset.correct = "false";
            option2Btn.dataset.correct = "true";
        }
        
        // Enable button interactions
        option1Btn.disabled = false;
        option2Btn.disabled = false;
        
    } catch (err) {
        console.error(err);
        situationText.textContent = "Erreur de chargement de la question. Passage à la suivante...";
        setTimeout(() => {
            currentIndex++;
            loadQuestion();
        }, 1500);
    }
}

function handleAnswer(clickedButton, event) {
    // Prevent double clicking while loading next
    option1Btn.disabled = true;
    option2Btn.disabled = true;
    
    const isCorrect = clickedButton.dataset.correct === "true";
    
    if (isCorrect) {
        // Trigger sound
        playSlapSound();
        
        // Update stats
        score++;
        combo++;
        if (combo > maxCombo) {
            maxCombo = combo;
        }
        
        // Update counters on UI
        scoreCounter.textContent = score;
        comboCounter.textContent = `X${combo}`;
        if (combo >= 5) {
            comboCounter.style.textShadow = '0 0 15px var(--neon-yellow)';
        }
        
        // Trigger impact styling
        clickedButton.classList.add('correct-clicked');
        
        // Screen Shake
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 150);
        
        // Card slap exit animation
        quizCardContainer.classList.add('slapped-card');
        
        // Dynamic Onomatopoeia Popups
        createOnomatopoeia(event.clientX, event.clientY);
        
        // Particle burst
        createParticles(event.clientX, event.clientY);
        
        // Delay to load next card (matches exit animation)
        setTimeout(() => {
            currentIndex++;
            loadQuestion();
        }, 400);
        
    } else {
        // Fail path
        playFailSound();
        combo = 0;
        comboCounter.textContent = 'X0';
        comboCounter.style.textShadow = 'none';
        
        clickedButton.classList.add('wrong-clicked');
        
        // Delay to load next card
        setTimeout(() => {
            currentIndex++;
            loadQuestion();
        }, 450);
    }
}

// ================= VISUAL EFFECTS GENERATION =================
function createOnomatopoeia(x, y) {
    const text = ONOMATOPOEIAS[Math.floor(Math.random() * ONOMATOPOEIAS.length)];
    const el = document.createElement('div');
    el.className = 'slap-text';
    el.textContent = text;
    
    // Position slightly offset from exact tap point
    el.style.left = `${x || window.innerWidth / 2}px`;
    el.style.top = `${y || window.innerHeight / 2}px`;
    
    // Scale size up with combo streak for extra dopamine
    const comboScale = 1 + Math.min(combo * 0.05, 0.8);
    el.style.transform = `translate(-50%, -50%) scale(${comboScale})`;
    
    slapOverlay.appendChild(el);
    
    // Clean up
    setTimeout(() => el.remove(), 450);
}

function createParticles(x, y) {
    const count = 15 + Math.min(combo, 15); // More particles for high combos
    const clickX = x || window.innerWidth / 2;
    const clickY = y || window.innerHeight / 2;
    
    const colors = ['#ff2a5f', '#ffd319', '#ff5722', '#ffeb3b', '#ffffff'];
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'slap-particle';
        
        // Randomize speed, angle and size
        const size = Math.random() * 8 + 4;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 120 + 40;
        
        const dx = Math.cos(angle) * speed;
        const dy = Math.sin(angle) * speed;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = `${clickX}px`;
        particle.style.top = `${clickY}px`;
        
        // Pass travel distances to CSS custom properties
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        
        slapOverlay.appendChild(particle);
        
        setTimeout(() => particle.remove(), 500);
    }
}

// ================= END GAME SCREEN =================
function endGame() {
    playWinFanfare();
    
    finalScore.textContent = score;
    statSwipes.textContent = questionIds.length;
    statMaxCombo.textContent = `X${maxCombo}`;
    
    // Determine rank
    let matchedRank = RANKS[0];
    for (const rank of RANKS) {
        if (score >= rank.min && score <= rank.max) {
            matchedRank = rank;
            break;
        }
    }
    
    rankBadge.textContent = matchedRank.title;
    resultEvaluation.textContent = matchedRank.desc;
    
    showScreen('result');
}

// ================= EVENT BINDINGS =================
btnStart.addEventListener('click', () => {
    initGame();
});

btnRestart.addEventListener('click', () => {
    initGame();
});

option1Btn.addEventListener('click', (e) => {
    handleAnswer(option1Btn, e);
});

option2Btn.addEventListener('click', (e) => {
    handleAnswer(option2Btn, e);
});

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.querySelector('.sound-icon').textContent = soundEnabled ? '🔊' : '🔇';
    soundToggle.style.borderColor = soundEnabled ? 'var(--neon-red)' : 'rgba(255, 255, 255, 0.1)';
});

// Setup click sound initialiser for user activation check
document.addEventListener('click', () => {
    initAudio();
}, { once: true });
