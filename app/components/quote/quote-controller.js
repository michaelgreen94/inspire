import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {
	// console.log('draw', quote)
	let words = document.getElementById('quote')
	let template = `
	<div class="quote">
	<div>"${quote.quote}"</div>
	<div>-${quote.author}</div>
	</div>`
	words.innerHTML = template

}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(function (quote) {
			// console.log('What is the quote', quote)
			drawQuote(quote)
		})
	}
}