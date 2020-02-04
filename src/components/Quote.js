import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote }) => (<h2>{quote}</h2>);

Quote.propTypes = {
  quote: PropTypes.string.isRequired
};

export default Quote;
