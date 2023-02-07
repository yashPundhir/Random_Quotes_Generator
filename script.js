const api_url = "https://api.quotable.io/random?minLength=100&maxLength=140";
let quote = document.querySelector(".quote-div .quote");
let author = document.querySelector(".quote-div .author");
async function quoteGenerator() {
	const response = await fetch(api_url);
	var data = await response.json();
	console.log(data);
	quote.textContent = `" ${data.content} "`;
	author.textContent = `- ${data.author}`;
}
//quoteGenerator();
