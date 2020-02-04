import React, { useState } from 'react';
import Quote from '../components/Quote';
import getQuote from '../services/getQuote';

const BodyFN = () => {
  const [quote, setQuote] = useState('QUOTE');
  const [source, setSource] = useState('SOURCE');

  const handleFetch = () => {
    getQuote()
      .then(({ tweetText, source }) => {
        setQuote(tweetText);
        setSource(source.fullName);
      });
  };

  return (
    <>
      <Quote quote={quote} source={source} />
      <button onClick={handleFetch}>New Quote</button>
    </>
  );
};

export default BodyFN;
