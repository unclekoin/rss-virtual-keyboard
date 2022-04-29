const production = require('./webpack.production.config.js');
const development = require('./webpack.development.config.js');

module.exports = ({ mode }) => {
  return mode ? production : development;
};
