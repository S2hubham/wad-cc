// Load users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];
const tbody = document.querySelector('#userTable tbody');

// Display users in the table
function displayUsers() {
    // Clear existing table content
    tbody.innerHTML = '';
    
    if (users.length === 0) {
        // If no users, display a message
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = 'No users registered yet.';
        td.colSpan = 2;
        td.style.textAlign = 'center';
        tr.appendChild(td);
        tbody.appendChild(tr);
    } else {
        // Add each user to the table
        users.forEach(user => {
            const tr = document.createElement('tr');
            
            const tdUsername = document.createElement('td');
            tdUsername.textContent = user.username;
            
            const tdEmail = document.createElement('td');
            tdEmail.textContent = user.email;
            
            tr.appendChild(tdUsername);
            tr.appendChild(tdEmail);
            tbody.appendChild(tr);
        });
    }
}

// Initialize the page
displayUsers();
