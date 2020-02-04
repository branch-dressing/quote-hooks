import { useState } from 'react';
import getQuote from '../services/getQuote';

export const useRandomQuote = () => {
  const [quote, setQuote] = useState('QUOTE');
  const [source, setSource] = useState('SOURCE');

  const handleFetch = () => {
    getQuote()
      .then(({ tweetText, source }) => {
        setQuote(tweetText);
        setSource(source.fullName);
      });
  };

  return { quote, source, handleFetch };
};
