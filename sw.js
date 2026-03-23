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

// Auto focus input
window.onload = () => {
document.getElementById('passcode').focus();
};

// Enter key support
document.addEventListener('DOMContentLoaded', () => {
document.getElementById('passcode').addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
checkAccess();
}
});
});
