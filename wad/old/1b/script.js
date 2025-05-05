// Array to hold user registration data
let users = [];

// Load users from localStorage if available
if(localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

// Handle form submission
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Create user object
    const user = { 
        username, 
        email, 
        password,
        registrationDate: new Date().toISOString()
    };

    // Simulate AJAX POST request
    // In a real application, this would send data to a server
    simulateAjaxPost(user)
        .then(response => {
            // Push user to array and save to localStorage
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            // Show success message
            alert('Registration successful!');
            
            // Clear form
            form.reset();
            
            // Redirect to user list page
            window.location.href = 'userlist.html';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error occurred during registration.');
        });
});

// Function to simulate AJAX POST request
function simulateAjaxPost(data) {
    return new Promise((resolve, reject) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate successful response (in real app, this would be a server response)
            if (data.username && data.email && data.password) {
                resolve({ status: 'success', message: 'User registered successfully' });
            } else {
                reject({ status: 'error', message: 'Invalid user data' });
            }
        }, 1000);
    });
}
