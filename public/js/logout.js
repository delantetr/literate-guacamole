// Function that logs user out
const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
    {
        // May need to be changed
        // document.location.replace('/');
        document.location.reload();
    }

    else
    {
        alert('Failed to logout');
    }
};

// When logout button is clicked logout function will be called
document.querySelector('#logOutButton').addEventListener("click", logout);

// Should display when user is logged in
console.log("Logout.js is connected");