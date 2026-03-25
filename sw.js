// CHANGE THIS to your password
const secret = "1234";

function checkAccess() {
    const code = input.value;

    if (code === secret) {
        lockScreen.style.display = 'none';
        appContent.style.display = 'block';
    } else {
        errorText.style.display = 'block';
        input.value = '';
    }
}

// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
    window.input = document.getElementById('passcode');
    window.button = document.getElementById('unlockBtn');
    window.lockScreen = document.getElementById('lock-screen');
    window.appContent = document.getElementById('app-content');
    window.errorText = document.getElementById('error');

    // Auto focus input
    input.focus();

    // Button click
    button.addEventListener('click', checkAccess);

    // Enter key triggers unlock
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            checkAccess();
        }
    });

    // Hide error when typing again
    input.addEventListener('input', () => {
        errorText.style.display = 'none';
    });
});
