const getQuote = (sourceId) => {
  return fetch('https://cors-anywhere.herokuapp.com/https://markovtwain.herokuapp.com/api/v1/results/' + sourceId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
    .then(res => {
      return res.json();
    });
};

export default getQuote;
