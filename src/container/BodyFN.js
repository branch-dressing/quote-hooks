import React from 'react';
import Quote from '../components/Quote';
import { useRandomQuote } from '../hooks/useRandomQuote';

const BodyFN = () => {
  const { quote, source, handleFetch } = useRandomQuote();

  return (
    <>
      <Quote quote={quote} source={source} />
      <button onClick={handleFetch}>New Quote</button>
    </>
  );
};

export default BodyFN;
