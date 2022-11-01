let apiQuotes = [];

// Show new quote
function NewQuote() {
	// Pick a random quote from apiQuotes array
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
	console.log(quote);
}

// Get quotes from API
async function GetQuotes () {
	const apiURL = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiURL);
		apiQuotes = await response.json();
		NewQuote();
	} catch (error) {
		// Catch error here
	}
}

// On load
GetQuotes();
