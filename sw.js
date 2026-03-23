<script>
    // Focus the input automatically when the page loads
    window.onload = () => {
        document.getElementById('passcode').focus();
    };

    function checkAccess() {
        const code = document.getElementById('passcode').value;
        // CHANGE THIS: This is your custom access code
        const secret = "YOUR_PASSWORD_HERE"; 

        if (code === secret) {
            // Hide the login and show the app links
            document.getElementById('lock-screen').style.display = 'none';
            document.getElementById('app-content').style.display = 'block';
        } else {
            // Show error and clear the box
            const errorMsg = document.getElementById('error');
            errorMsg.style.display = 'block';
            document.getElementById('passcode').value = '';
            
            // Shake effect for wrong password (optional)
            document.getElementById('lock-screen').style.transform = "translateX(10px)";
            setTimeout(() => {
                document.getElementById('lock-screen').style.transform = "translateX(0)";
            }, 100);
        }
    }

    // Listen for the "Enter" key on the iPhone keyboard
    document.getElementById('passcode').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            checkAccess();
        }
    });
</script>
