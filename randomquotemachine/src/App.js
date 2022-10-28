import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      quoteData: [],
      quote: '',
      author: '',
      error: null,
      isLoaded: false,
      colorsHex: `rgb(
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)})`,
    }
  }

  // componentDidMount is a lifecycle method that is called only when the component is mounted. It is called only once after the first render.
  componentDidMount = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randIndex = Math.floor(Math.random() * data.length)
        this.setState({
            quoteData: data,
            quote: data[randIndex].text,
            author: data[randIndex].author || "No author",
            isLoaded: true,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
          this.setState({
              error: error,
              isLoaded: true
          })
      }
    )
  }

  changeBodyColor = () => {
    this.setState({
      colorsHex: `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`
    })
  }

  getQuotes = () => {
    const randIndex = Math.floor(Math.random() * this.state.quoteData.length)
    this.setState(prevState => ({
      quote: prevState.quoteData[randIndex].text,
      author: prevState.quoteData[randIndex].author || "No author",
    }))
    this.changeBodyColor()
  }

  render() {
    const randColor = this.state.colorsHex

    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    } else if (!this.state.isLoaded) {
      return <div>Please wait. Loading...</div>
    } else {
      return (
        <div className="page-background" style={{backgroundColor:randColor , transition: "1s"}}>
          <div id="quote-box" className="container text-center">
            <div className="quoted">
            <blockquote className="blockquote" id="text" style={{color: randColor, transition: "1s"}}>
              <p className="mx-auto quotetext">
                <i className="fas fa-quote-left"></i>{this.state.quote}
              </p>
              <footer id="author" className="blockquote-footer text-end">
              <cite style={{color: randColor, transition: "1s"}}>{this.state.author}</cite>
              </footer>
            </blockquote>
            </div>
            <div className="icons-buttons">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" title="Tweet this!">
              <i className="fa-brands fa-twitter-square fa-2xl" style={{color:randColor , transition: "1s"}} ></i>
            </a>
            <button className="btn btn-primary btn-sm" type="button" id="new-quote" onClick={this.getQuotes.bind(this)} style={{backgroundColor:randColor , transition: "1s"}}>New quote</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
