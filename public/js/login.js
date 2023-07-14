// Allows user to login if correct email and password are entered
const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email=login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password)
    {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok)
        {
            // This may need to be changed
            document.location.replace('/');
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

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && password)
    {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok)
        {
            // This may need to be changed
            document.location.replace('/');
        }

        else
        {
            alert('Failed to sign up');
        }
    }
};

// When login form is submitted loginFormHandler will be called
document.querySelector('.login-form').addEventListener("submit", loginFormHandler);

// When signup form is submitted signupFormHandler will be called
document.querySelector('.signup-form').addEventListener("submit", signupFormHandler);