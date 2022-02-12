const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = []

// show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // check if author field is blank
    if(!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;
    }

    // check quote length to determine the style
    if(quote.text.length > 40) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
}

// asychronous catch request
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl) // only setting the response when we actually have data
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // Catch Error Here
    }
}

// tweet quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
}

// On Load
getQuotes();