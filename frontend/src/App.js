import React, { Component } from "react";
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteList: [
        {
          text: "Your time is limited, so don’t waste it living someone else’s life.",
          author: 'Steve Jobs'
        },
        {
          text: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
          author: 'Bill Gates'
        },
        {
          text: "It takes 20 years to build a reputation and five minutes to ruin it.",
          author: 'Warren Buffett'
        },
        {
          text: "I have not failed. I’ve just found 10,000 ways that won’t work.",
          author: 'Thomas Edison'
        },
        {
          text: "Logic will get you from A to B. Imagination will take you everywhere.",
          author: 'Albert Einstein'
        },
        {
          text: "Success is walking from failure to failure with no loss of enthusiasm.",
          author: 'Winston Churchill'
        },
             {
          text: "The purpose of our lives is to be happy.",
          author: 'Dalai Lama'
        },
        {
          text: "You only live once, but if you do it right, once is enough.",
          author: 'Mae West'
        },
        {
          text: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
          author: 'Thomas Edison'
        },
        {
          text: "Not how long, but how well you have lived is the main thing.",
          author: 'Seneca'
        },
        {
          text: "Turn your wounds into wisdom.",
          author: 'Oprah Winfrey'
        },
        {
          text: "I like criticism. It makes you strong.",
          author: 'LeBron James'
        }
      ],
      randomIndex: Math.floor(Math.random() * 12)
    }
    this.newQuote = this.newQuote.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }
  newQuote() {
    this.setState(
      this.state.randomIndex === 10 ?
        {randomIndex: 0}
      :
        {randomIndex: this.state.randomIndex + 1}     
    )
  };
  refreshList() {
    axios
      .get("/api/quotes/")
      .then((res) => this.setState({ quoteList: res.data }))
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.refreshList();
  }
  
  render() {
    const quote = this.state.quoteList[this.state.randomIndex];
    const hrefTweet = 'https://twitter.com/intent/tweet?text="' + quote.text + '" ' + quote.author;
    return (
    <div className="wrapper" id="quote-box">
        <h1 id="text"><i id="quote-icon" className="fas fa-quote-left"></i> {quote.text}</h1>
        <p id="author">{quote.author}</p>
        <button id="new-quote" onClick={this.newQuote}>New quote</button>
        <a id="tweet-quote" href={hrefTweet} ><i className="fab fa-twitter-square"></i></a>
    </div>
    );
  }
}

export default App;
