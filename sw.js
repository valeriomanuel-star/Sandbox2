const secret = "1234";

const screens = {
    lock: document.getElementById("lock"),
    hack: document.getElementById("hack"),
    face: document.getElementById("faceScreen"),
    profile: document.getElementById("profileSetup"),
    dashboard: document.getElementById("dashboard")
};

const pin = document.getElementById("pin");
const error = document.getElementById("error");

/* SWITCH SCREEN */
function show(screen) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

/* PIN INPUT */
pin.addEventListener("input", () => {
    if (pin.value.length === 4) {
        if (pin.value === secret) {
            startSystem();
        } else {
            error.innerText = "ACCESS DENIED";
            pin.value = "";
        }
    }
});

/* START */
function startSystem() {
    document.documentElement.requestFullscreen().catch(()=>{});
    show(screens.hack);
    startHack();
}

/* HACK */
function startHack() {
    let time = 60;
    const log = document.getElementById("log");

    const lines = [
        "> Establishing secure tunnel...",
        "> Injecting exploit...",
        "> Bypassing authentication...",
        "> Masking identity...",
        "> Access granted..."
    ];

    let i = 0;

    const logInt = setInterval(() => {
        if (i < lines.length) {
            log.innerHTML += lines[i] + "<br>";
            i++;
        } else clearInterval(logInt);
    }, 2000);

    const timer = setInterval(() => {
        time--;
        document.getElementById("timer").innerText = time;

        if (time <= 0) {
            clearInterval(timer);
            showFace();
        }
    }, 1000);
}

/* FACE */
function showFace() {
    show(screens.face);

    setTimeout(() => {
        const user = localStorage.getItem("profileName");
        if (user) loadDashboard();
        else show(screens.profile);
    }, 3000);
}

/* PROFILE */
function saveProfile() {
    const name = document.getElementById("username").value;
    if (!name) return;

    localStorage.setItem("profileName", name);
    loadDashboard();
}

/* DASHBOARD */
function loadDashboard() {
    show(screens.dashboard);
    const name = localStorage.getItem("profileName");
    document.getElementById("welcome").innerText = "Welcome, " + name;
}

/* LOGOUT */
function logout() {
    localStorage.removeItem("profileName");
    location.reload();
}

/* OPEN SNAP */
function launchSnap() {
    window.location.href = "https://web.snapchat.com";
}
