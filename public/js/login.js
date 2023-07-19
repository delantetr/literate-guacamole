// Allows user to login if correct email and password are entered
const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#logInUsername').value.trim();
    const password = document.querySelector('#logInPassword').value.trim();

    if (username && password)
    {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok)
        {
            // This may need to be changed
            // document.location.replace('/');
            document.location.reload();
        }

        else
        {
            alert('Failed to login');
        }
    }
};

// Allows user to create account if email and password are entered
const signupFormHandler = async (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#signUpFirstName').value.trim();
    const lastName = document.querySelector('#signUpLastName').value.trim();
    const email = document.querySelector('#signUpEmail').value.trim();
    const username = document.querySelector('#signUpUsername').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();

    console.log("User inputs: ");
    console.log(firstName, lastName, email, username, password);

    if (firstName && lastName && email && username && password)
    {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok)
        {
            // This may need to be changed
            console.log("Added to database");
            // document.location.replace('/');
            document.location.reload();
        }

        else
        {
            alert('Failed to sign up');
        }
    }
};

// When login form is submitted loginFormHandler will be called
document.querySelector('#login-form').addEventListener("submit", loginFormHandler);

// When signup form is submitted signupFormHandler will be called
document.querySelector('#signup-form').addEventListener("submit", signupFormHandler);

// Should display when user is not logged in
console.log("login.js is connected");