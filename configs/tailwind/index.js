const { tailwind } = require('@boilerplate/tokens');
const plugin = require('tailwindcss/plugin');

module.exports = (...content) => {
  return {
    content,
    mode: 'jit',
    theme: {
      colors: tailwind.colors,
      extend: {},
    },
    corePlugins: {
      container: false,
    },
    plugins: [
      plugin(function pressedPlugin({ addVariant }) {
        addVariant('pressed', ' &[aria-pressed="true"]');
        addVariant('adjacent', ' &~*');
        addVariant('sibling', ' &+*');
        addVariant('child', ' &>*');
      }),
      plugin(function ({ matchUtilities }) {
        matchUtilities({
          'grid-area': (gridArea) => ({ gridArea }),
          'grid-areas': (gridAreas) => ({
            gridTemplateAreas: gridAreas.replaceAll(',', ' '),
          }),
        });
      }),
    ],
  };
};
