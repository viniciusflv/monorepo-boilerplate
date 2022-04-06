// const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ['src/**/*.woff'],
  platforms: {
    fonts: {
      transformGroup: 'css',
      buildPath: './dist/',
      files: [
        {
          destination: 'index.css',
          format: 'css/fonts.css',
          options: { showFileHeader: false },
        },
      ],
    },
    js: {
      transformGroup: 'web',
      buildPath: './dist/',
      files: [
        {
          destination: 'index.js',
          format: 'javascript/umd',
          options: { showFileHeader: false },
        },
      ],
    },
  },
};
