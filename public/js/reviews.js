// Handles adding new review, updating review, and deleting review

// Fetch call POST that adds review to database
const addReviewHandler = async (event) => {
    event.preventDefault();

    // Gets album name from HTML page
    const album = document.querySelector('#album-title').value;

    // Gets user review text from text area in add review form
    const reviewText = document.querySelector('#review-text').value;

    // This will not be nessecary as SQL will create review IDs
    // getLatestReviewID function will be a fetch call get that retrieves the newest review ID
    // const reviewID = getLatestReviewID + 1;

    if (album && reviewText)
    {
        await fetch('/api/reviews/add', {
            method: 'POST',
            body: JSON.stringify({ album, reviewText }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Successfully added review:", data);
            return data;

            // May need document.location.reload() to display new review
        })
        .catch((error) => {
            console.error("Error adding review:", error);
        });
    }
};

// May need to use id as input instead
const updateReviewHandler = async (event) => {
    event.preventDefault();

    const updatedReviewText = document.querySelector('#review-text').value;

    // Need a way to retreive reviewID for review that needs to be updated
    // May need to use UserID to get this

    if (updatedReviewText)
    {
        if (event.target.hasAttribute('reviewID'))
        {
            const id = event.target.getAttribute('reviewID');
        
            await fetch(`/api/reviews/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ album, updatedReviewText, id }),
                headers: { 'Content-Type': 'application/json' },
            })
            .then((res) => res.json())
            .then((data) => {
                console.log("Successfully updated review: " + data);
            })
            .catch((error) => {
                console.error("Error updating review: " + error);
            });
        }
    }
}

const deleteReviewHandler = async (event) => {
    event.preventDefault();

    // May need to use this
    // event.stopPropogation();

    if (event.target.hasAttribute('reviewID'))
    {
        const id = event.target.getAttribute('reviewID');

        await fetch(`/api/reviews/delete/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Successfully deleted review: " + data);
        })
        .catch((error) => {
            console.error("Error deleting review: " + error);
        });
    }
}

document.querySelector('.add-review-form').addEventListener("submit", addReviewHandler);

// May need to change these to listen for click
document.querySelector('.update-review-form').addEventListener("submit", updateReviewHandler);
document.querySelector('.delete-review-form').addEventListener("submit", deleteReviewHandler);