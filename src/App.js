import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const endpoint = "https://api.quotable.io/random"

  const [quoteInfo, setQuoteInfo] = useState({})

  const getQuote = () => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        });
      });
  }

  // Get Quote
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="App">
      <h1 className ="text-3l font-bold underline">Random Quote Machine</h1>
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        <a id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text}>Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
