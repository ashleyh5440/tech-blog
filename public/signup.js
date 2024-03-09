    // Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
        // Get references to the form elements
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signupButton = document.querySelector('#signup-signup-btn');

        // Add an event listener to the signup button
signupButton.addEventListener('click', function() {
            // Get the values from the form fields
const username = usernameInput.value.trim();
const email = emailInput.value.trim();
const password = passwordInput.value.trim();

            // Check if any field is empty
if (!username || !email || !password) {
    alert('Please fill in all fields');
        return;
    }

            // Send a POST request server with user data
fetch('/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, email, password })
    })
    .then(response => {
        if (response.ok) {
                    // Redirect to the dashboard or show a success message
            window.location.href = '/dashboard'; 
        } else {
                    // Handle errors
            alert('Sign up failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
        });
    });
});