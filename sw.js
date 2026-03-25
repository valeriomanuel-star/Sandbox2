document.addEventListener('DOMContentLoaded', () => {
    const secret = "1234"; // change this

    const passInput = document.getElementById('passcode');
    const unlockBtn = document.getElementById('unlockBtn');
    const lockScreen = document.getElementById('lock-screen');
    const appContent = document.getElementById('app-content');
    const errorText = document.getElementById('error');

    function checkAccess() {
        const code = passInput.value;

        if (code === secret) {
            // Close keyboard on mobile
            passInput.blur();

            // Smooth fade out
            lockScreen.style.opacity = '0';

            setTimeout(() => {
                lockScreen.style.display = 'none';
                appContent.style.display = 'block';
            }, 200);

        } else {
            errorText.style.display = 'block';
            passInput.value = '';
        }
    }

    // Button click
    unlockBtn.addEventListener('click', checkAccess);

    // Enter key
    passInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkAccess();
    });

    // Hide error when typing again
    passInput.addEventListener('input', () => {
        errorText.style.display = 'none';
    });

    // Auto focus
    passInput.focus();
});
