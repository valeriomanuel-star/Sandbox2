document.addEventListener("DOMContentLoaded", () => {

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

    // ========================
    // PIN CHECK
    // ========================
    function checkPin() {
        if (pin.value === secret) {
            startSystem();
        } else {
            error.innerText = "ACCESS DENIED";
            pin.value = "";
        }
    }

    unlockBtn.addEventListener("click", checkPin);

    pin.addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkPin();
    });

    // ========================
    // SCREEN SWITCH FUNCTION
    // ========================
    function show(screen) {
        Object.values(screens).forEach(s => s.classList.remove("active"));
        screen.classList.add("active");
    }

    // ========================
    // START SYSTEM (HACK SEQUENCE)
    // ========================
    function startSystem() {
        show(screens.hack);
        startHack();
    }

    function startHack() {
        let time = 60;
        const log = document.getElementById("log");
        log.innerHTML = "";
        const lines = [
            "> Establishing secure tunnel...",
            "> Injecting exploit...",
            "> Bypassing authentication...",
            "> Masking identity...",
            "> Access granted..."
        ];

        let i = 0;
        const logInterval = setInterval(() => {
            if (i < lines.length) {
                log.innerHTML += lines[i] + "<br>";
                i++;
            } else clearInterval(logInterval);
        }, 2000);

        const timerInterval = setInterval(() => {
            time--;
            document.getElementById("timer").innerText = time;
            if (time <= 0) {
                clearInterval(timerInterval);
                showFace();
            }
        }, 1000);
    }

    function showFace() {
        show(screens.face);
        setTimeout(() => {
            const user = localStorage.getItem("profileName");
            if (user) loadDashboard();
            else show(screens.profile);
        }, 3000);
    }

    // ========================
    // PROFILE SETUP
    // ========================
    window.saveProfile = function() {
        const name = document.getElementById("username").value;
        if (!name) return;
        localStorage.setItem("profileName", name);
        loadDashboard();
    };

    // ========================
    // DASHBOARD
    // ========================
    function loadDashboard() {
        show(screens.dashboard);
        const name = localStorage.getItem("profileName");
        document.getElementById("welcome").innerText = "Welcome, " + name;
    }

    window.logout = function() {
        localStorage.removeItem("profileName");
        location.reload();
    };

    window.launchSnap = function() {
        window.location.href = "https://web.snapchat.com";
    };

});
