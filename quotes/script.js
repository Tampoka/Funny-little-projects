const quoteEl = document.getElementById('quote');
const quoteBtn = document.getElementById('quoteBtn');
const authorEl=document.getElementById('author')
quoteBtn.addEventListener('click', generateQuote);

generateQuote();

// USING ASYNC/AWAIT
async function generateQuote() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const res = await fetch(
		'https://goquotes-api.herokuapp.com/api/v1/random?count=1',
		config
	);

	const data = await res.json();

	quoteEl.innerHTML = '"' + data.quotes[0].text + '"';
  authorEl.innerHTML=data.quotes[0].author;
}

// USING .then()
// function generateQuote() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1', config)
//     .then((res) => res.json())
//     .then((data) => {
//       quoteEl.innerHTML = data.quotes[0];
//     })
// }
