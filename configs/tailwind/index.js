const { tailwind } = require('@boilerplate/tokens');

module.exports = (...content) => {
  return {
    content,
    mode: 'jit',
    theme: {
      colors: tailwind.colors,
      extend: {},
    },
    plugins: [],
  };
};
