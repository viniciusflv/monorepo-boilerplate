const path = require('path');
const tailwind = require('@configs/tailwind');

module.exports = tailwind(
  path.resolve(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
);
