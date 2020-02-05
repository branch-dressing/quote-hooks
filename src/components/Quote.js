import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, source }) => (
  <>
    <h3>&quot;{quote}&quot;</h3>
    <h4>-{source}</h4>
  </>
);

Quote.propTypes = {
  quote: PropTypes.string,
  source: PropTypes.string
};

export default Quote;
