import React, { Component } from 'react';
import Quote from '../components/Quote';
import getQuote from '../services/getQuote';

export default class Body extends Component {
  state = {
    quote: 'default'
  }

  handleFetch = () => {
    return getQuote()
      .then(({ tweetText }) => tweetText)
      .then(quote => this.setState({ quote }));
  }

  render() {
    const { quote } = this.state;
    return (
      <>
        <Quote quote={quote} />
        <button onClick={this.handleFetch}>New Quote</button>
      </>
    );
  }
}
