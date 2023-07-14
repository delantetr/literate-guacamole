
// Fetch call POST that adds review to database
const addReviewHandler = async (event) => {
    event.preventDefault();

    // Gets album name from HTML page
    const album = document.querySelector('#album-title').value;

    // Gets user review text from text area in add review form
    const reviewText = document.querySelector('#review-text').value;

    // getLatestReviewID function will be a fetch call get that retrieves the newest review ID
    const reviewID = getLatestReviewID + 1;

    if (album && reviewText)
    {
        await fetch('/api/reviews/add', {
            method: 'POST',
            body: JSON.stringify({ album, reviewText, reviewID }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Successfully added review:", data);
            return data;

            // May need document.location.reload() to display new review
        })
        .catch((error) => {
            console.error("Error in adding review:", error);
        });
    }
};

const updateReviewHandler = async (event) => {
    event.preventDefault();

    const updatedReviewText = document.querySelector('#review-text').value;

    // Need a way to retreive reviewID for review that needs to be updated
    // May need to use UserID to get this

    if (updatedReviewText)
    {
        if (event.target.hasAttribute('review-id'))
        {
            const id = event.target.getAttribute('review-id');
        
            await fetch(`/api/reviews/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ album, updatedReviewText, id }),
                headers: { 'Content-Type': 'application/json' },
            })
            // Need to add res here
        }
    }
}

document.querySelector('.review-form').addEventListener("submit", addReviewHandler);