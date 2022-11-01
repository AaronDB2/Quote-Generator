const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

// Hide loading
function completeLoading() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

// Show new quote
function newQuote() {
	loading();
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]

	// Check if author field is blank and replace it with 'Unknown'
	if (!quote.author){
		authorText.textContent('Unknown');
	} else {
		authorText.textContent = quote.author;
	}

	//Check quote length to determine the styling
	if (quote.text.length > 130){
		quoteText.classList.add('long-quote');
	} else {
		quoteText.classList.remove('long-quote');
	}

	// Set quote and hide loader
	quoteText.textContent = quote.text;
	completeLoading();
}

// Get quotes from API
async function getQuotes () {
	loading();
	const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiURL);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// Catch error here
	}
}

// Tweet quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
}

// Eventlisteners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();

