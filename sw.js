// CHANGE THIS to your password
const secret = "1234";

function checkAccess() {
    const code = document.getElementById('passcode').value;

    if (code === secret) {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('passcode').value = '';
    }
}

// Make function available globally (important for iPhone)
window.checkAccess = checkAccess;

// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('passcode');
    const button = document.getElementById('unlockBtn');

    // Auto focus input
    input.focus();

    // Button click
    button.addEventListener('click', checkAccess);

    // Enter key triggers unlock
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAccess();
        }
    });
});
