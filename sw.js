document.addEventListener("DOMContentLoaded", () => {
    const secret = "1234";
    const unlockBtn = document.getElementById("unlockBtn");
    const pin = document.getElementById("pin");
    const error = document.getElementById("error");

    // Helper to switch screens
    function show(screenId) {
        document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
        const target = document.getElementById(screenId);
        if(target) target.classList.add("active");
    }

    function checkPin() {
        // DEBUG: Uncomment the line below to test if the button works at all
        // alert("Attempting login with: " + pin.value); 

        if (pin.value === secret) {
            show("hack"); // Move to the Hack Sequence
            startHack();  // Call your timer function
        } else {
            error.innerText = "ACCESS_DENIED";
            pin.value = "";
        }
    }

    if (unlockBtn) {
        unlockBtn.addEventListener("click", (e) => {
            e.preventDefault(); // Prevents any weird iOS keyboard behavior
            checkPin();
        });
    }
});
