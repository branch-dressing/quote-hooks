import { useState, useEffect } from 'react';
import getQuote from '../services/getQuote';

export const useRandomQuote = () => {
  const [quote, setQuote] = useState();
  const [source, setSource] = useState();

  useEffect(() => {
    const event = {
      target: {
        value: ''
      }
    };
    handleFetch(event);
  }, []);

  const handleFetch = ({ target }) => {
    getQuote(target.value)
      .then(({ tweetText, source }) => {
        setQuote(tweetText);
        setSource(source.fullName);
      });
  };

  return { quote, source, handleFetch };
};
