//your JS code here. If required.
        // Check if there are saved details in local storage
        if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
            // Show button to login as existing user
            document.body.innerHTML += '<button id="existing">Login as existing user</button>';

            // Handle click on the existing user button
            document.getElementById('existing').addEventListener('click', function () {
                const savedUsername = localStorage.getItem('savedUsername');
                alert('Logged in as ' + savedUsername);
            });
        }

        // Handle form submission
        document.getElementById('loginForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const rememberCheckbox = document.getElementById('remember');

            // Save details to local storage if the checkbox is checked
            if (rememberCheckbox.checked) {
                localStorage.setItem('savedUsername', username);
                localStorage.setItem('savedPassword', password);
            } else {
                // Remove saved details from local storage if the checkbox is not checked
                localStorage.removeItem('savedUsername');
                localStorage.removeItem('savedPassword');
            }

            // Show alert with the text "Logged in as <username>"
            alert('Logged in as ' + username);
        });
    