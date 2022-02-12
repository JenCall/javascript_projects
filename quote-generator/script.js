// Get Quotes From API

let apiQuotes = []

// Asychronous catch request
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl) //only setting the response when we actually have data
        apiQuotes = await response.json();
        console.log(apiQuotes[12]);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();