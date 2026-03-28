// ============================
// app.js
// ============================

const secret = "1234";

// Screens
const screens = {
    lock: document.getElementById("lock"),
    hack: document.getElementById("hack"),
    face: document.getElementById("faceScreen"),
    profile: document.getElementById("profileSetup"),
    dashboard: document.getElementById("dashboard")
};

// Elements
const pin = document.getElementById("pin");
const unlockBtn = document.getElementById("unlockBtn");
const error = document.getElementById("error");

// ============================
// PIN CHECK FUNCTION
// ============================
function checkPin() {
    if (pin.value === secret) {
        startSystem(); // proceed to hack sequence
    } else {
        error.innerText = "ACCESS DENIED";
        pin.value = "";
    }
}

// ============================
// Event Listeners
// ============================

// Button click
unlockBtn.addEventListener("click", checkPin);

// Press Enter key
pin.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkPin();
});

// ============================
// SCREEN SWITCH FUNCTION
// ============================
function show(screen) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

// ============================
// START SYSTEM (HACK SEQUENCE)
// ============================
function startSystem() {
    // Fullscreen (optional)
    document.documentElement.requestFullscreen().catch(()=>{});

    // Show hack screen
    show(screens.hack);
    startHack();
}

// ============================
// HACK SEQUENCE
// ============================
function startHack() {
    let time = 60;
    const log = document.getElementById("log");
    log.innerHTML = ""; // clear previous logs

    const lines = [
        "> Establishing secure tunnel...",
        "> Injecting exploit...",
        "> Bypassing authentication...",
        "> Masking identity...",
        "> Access granted..."
    ];

    let i = 0;

    // Log lines one by one
    const logInterval = setInterval(() => {
        if (i < lines.length) {
            log.innerHTML += lines[i] + "<br>";
            i++;
        } else {
            clearInterval(logInterval);
        }
    }, 2000);

    // Countdown timer
    const timerInterval = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = time;

        if (time <= 0) {
            clearInterval(timerInterval);
            showFace();
        }
    }, 1000);
}

// ============================
// FACE ID SEQUENCE
// ============================
function showFace() {
    show(screens.face);

    setTimeout(() => {
        const user = localStorage.getItem("profileName");
        if (user) loadDashboard();
        else show(screens.profile);
    }, 3000);
}

// ============================
// PROFILE SETUP
// ============================
function saveProfile() {
    const name = document.getElementById("username").value;
    if (!name) return;

    localStorage.setItem("profileName", name);
    loadDashboard();
}

// ============================
// DASHBOARD
// ============================
function loadDashboard() {
    show(screens.dashboard);
    const name = localStorage.getItem("profileName");
    document.getElementById("welcome").innerText = "Welcome, " + name;
}

// ============================
// LOGOUT
// ============================
function logout() {
    localStorage.removeItem("profileName");
    location.reload();
}

// ============================
// OPEN SNAPCHAT WEB
// ============================
function launchSnap() {
    window.location.href = "https://web.snapchat.com";
}
