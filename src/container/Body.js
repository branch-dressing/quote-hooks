import React, { Component } from 'react';
import Quote from '../components/Quote';
import getQuote from '../services/getQuote';

export default class Body extends Component {
  state = {
    quote: 'QUOTE',
    source: 'SOURCE'
  }

  handleFetch = () => {
    getQuote()
      .then(({ tweetText, source }) => {
        this.setState({ quote: tweetText });
        this.setState({ source: source.fullName });
      });
  }

  render() {
    const { quote, source } = this.state;
    return (
      <>
        <Quote quote={quote} source={source} />
        <button onClick={this.handleFetch}>New Quote</button>
      </>
    );
  }
}
