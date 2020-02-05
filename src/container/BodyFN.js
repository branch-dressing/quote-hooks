import React from 'react';
import Quote from '../components/Quote';
import { useRandomQuote } from '../hooks/useRandomQuote';

const BodyFN = () => {
  const { quote, source, handleFetch } = useRandomQuote();

  return (
    <>
      <Quote quote={quote} source={source} />
      <select value="" onChange={handleFetch}>
        <option disabled value="">Quote by Author</option>
        <option value="5e1e4ec52d2b701b5aaf022a">Mark Twain</option>
        <option value="5e1e4ec52d2b701b5aaf0226">Jane Austen</option>
        <option value="5e1e4ec52d2b701b5aaf0228">Edgar Allan Poe</option>
        <option value="5e1e4ec52d2b701b5aaf0229">Lewis Carroll</option>
        <option value="5e1e4ec52d2b701b5aaf0227">Fyodor Dostoevsky</option>
        <option value="">RANDOM</option>
      </select>
    </>
  );
};

export default BodyFN;
