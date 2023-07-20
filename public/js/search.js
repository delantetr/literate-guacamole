const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

console.log('Search.js is connected');

searchButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    return;
  }

  try {
    // Encode the search term and append it to the URL as a query parameter
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    console.log(encodedSearchTerm);

    // Send the search term to the server to retrieve the matching data
    const response = await fetch(`/api/search?query=${encodedSearchTerm}`);
    console.log(response);
    const data = await response.json();
    console.log(data);



    // Check if the response is an empty array
    if (Array.isArray(data) && data.length === 0) {
      alert('No matching results found.');
      return;
    }


    // Redirect the user to the corresponding page based on the type
    if (data[0].type === 'album') {
      window.location.replace(`/api/albums/${data[0].id}`);
    } else if (data[0].type === 'artist') {
      window.location.replace(`/api/artists/${data[0].id}`);
    } else {
      alert('Invalid result type.');
    }
  } catch (error) {
    console.error('An error occurred during search:', error);
    // Show an error message to the user if necessary
  }
});
