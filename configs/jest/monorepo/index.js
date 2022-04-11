const path = require('path');

module.exports = {
  ...require('../gatsby'),
  roots: [
    '<rootDir>/apps/',
    '<rootDir>/libs/',
    `${path.resolve(__dirname, '..', 'gatsby')}`,
  ],
};
