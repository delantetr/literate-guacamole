// Handles adding new review, updating review, and deleting review

// Fetch call POST that adds review to database
const addReviewHandler = async (event) => {
    event.preventDefault();

    // Gets album name from URL
    const currentURL = window.location.href;
    const albumID = currentURL.split('/').at(-1);

    // Gets user review text from text area in review form
    const reviewText = document.querySelector('#review-text').value;

    if (reviewText)
    {
        await fetch(`/api/reviews/${albumID}`, {
            method: 'POST',
            body: JSON.stringify({ reviewText }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Successfully added review:", data);
            document.location.reload();
            // return data;
        })
        .catch((error) => {
            console.error("Error adding review:", error);
        });
    }
};

// Fetch call PUT that updates existing review
const updateReviewHandler = async (event) => {
    event.preventDefault();

    const fullID = event.submitter.id;
    const id = fullID.replace("update_", "");

    console.log(id);

    const updatedReviewText = document.querySelector(`#updateReviewText_${id}`).value;

    console.log(updatedReviewText);

    if (updatedReviewText)
    {
        await fetch(`/api/reviews/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ updatedReviewText }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Successfully updated review: " + data);
            document.location.reload();
        })
        .catch((error) => {
            console.error("Error updating review: " + error);
        });
    }
}

// Fetch call DELETE that deletes existing review
const deleteReviewHandler = async (event) => {
    event.preventDefault();

    const fullID = event.submitter.id;
    const id = fullID.replace("delete_", "");

    console.log(id);

    await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log("Successfully deleted review: " + data);
        document.location.reload();
    })
    .catch((error) => {
        console.error("Error deleting review: " + error);
    });
}

if (window.location.pathname.includes("/api/albums/"))
{
    document.querySelector('#reviewForm').addEventListener("submit", addReviewHandler);
    document.querySelector('#updateForm').addEventListener("submit", updateReviewHandler);
    document.querySelector('#deleteForm').addEventListener("submit", deleteReviewHandler);

    console.log("Event listeners connected");
}

console.log("Reviews.js is connected");