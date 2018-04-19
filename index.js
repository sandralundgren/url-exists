const request = require('request');
const rp      = require('request-promise');

module.exports = async (url) => {
  const options = {
    uri: url,
    resolveWithFullResponse: true 
  };

  try {
    const res = await rp(options);
    return (/^(?!4)\d\d/.test(res.statusCode));
  } catch(err) {
    console.log(`Error: ${err.error.message}`);
    return false;
  }
}
