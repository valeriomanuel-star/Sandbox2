const secret = "1234"; // CHANGE THIS

function checkAccess() {
const code = document.getElementById('passcode').value;

```
if (code === secret) {
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
} else {
    document.getElementById('error').style.display = 'block';
    document.getElementById('passcode').value = '';
}
```

}

// Make function available globally (fixes iPhone issues)
window.checkAccess = checkAccess;

// Wait for page to load
document.addEventListener('DOMContentLoaded', () => {
const input = document.getElementById('passcode');
const button = document.getElementById('unlockBtn');

```
// Focus input
input.focus();

// Button click
button.addEventListener('click', checkAccess);

// Enter key
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkAccess();
    }
});
```

});
