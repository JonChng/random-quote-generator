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
    <div className="App flex-auto place-content-center w-1/2 h-auto p-10 m-auto">
      <h1 className="text-3xl font-bold underline center pb-10">Random Quote Machine</h1>
      <div id="quote-box" className='flex-auto place-content-center bg-white w-full h-auto p-10 m-auto rounded-lg'>
        <p id="text">{quoteInfo.text}</p>
        <p id="author" className="mb-15">{quoteInfo.author}</p>

        <div className="pt-10 ">
          <button id="new-quote" onClick={getQuote} className="p-1 bg-slate-500 rounded-xl content-center w-1/2 mb-5">
            New Quote
          </button>
          <br />
          <a className="flex justify-center items-center" id="tweet-quote" href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quoteInfo.text}>
            <img className="size-5 "src="/logo-black.png" alt="twitter" />
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;
