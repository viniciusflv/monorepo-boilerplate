/* eslint-disable no-prototype-builtins */
const StyleDictionary = require('style-dictionary');

function minifyDictionary(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  var toRet = {};

  if (obj.hasOwnProperty('value')) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        toRet[name] = minifyDictionary(obj[name]);
      }
    }
  }
  return toRet;
}

// Register an "attribute" transform to codify the font's details
// as named attributes.
StyleDictionary.registerTransform({
  name: 'attribute/font',
  type: 'attribute',
  transformer: (prop) => ({
    category: prop.path[0],
    type: prop.path[1],
    family: prop.path[2],
    weight: prop.path[3],
    style: prop.path[4],
  }),
});

// Register a custom format to generate @font-face rules.
StyleDictionary.registerFormat({
  name: 'font-face',
  formatter: ({ dictionary: { allTokens }, options }) => {
    const fontPathPrefix = options.fontPathPrefix || '../';

    // https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src
    const formatsMap = {
      woff2: 'woff2',
      woff: 'woff',
      ttf: 'truetype',
      otf: 'opentype',
      svg: 'svg',
      eot: 'embedded-opentype',
    };

    return allTokens
      .reduce((fontList, prop) => {
        const {
          attributes: { family, weight, style },
          formats,
          value: path,
        } = prop;

        const urls = formats.map((extension) => {
          return `url("${fontPathPrefix}${path}.${extension}") format("${formatsMap[extension]}")`;
        });

        const fontCss = [
          '@font-face {',
          `\n\tfont-family: "${family.replace(/_/g, ' ')}";`,
          `\n\tfont-style: ${style};`,
          `\n\tfont-weight: ${weight};`,
          `\n\tsrc: ${urls.join(',\n\t\t\t ')};`,
          '\n\tfont-display: fallback;',
          '\n}\n',
        ].join('');

        fontList.push(fontCss);

        return fontList;
      }, [])
      .join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'javascript/nested',
  formatter: function ({ dictionary }) {
    const tokens = minifyDictionary(dictionary.tokens);

    return Object.keys(tokens).reduce(
      (acc, key) =>
        (acc += `exports.${key} = ${JSON.stringify(tokens[key], null, 2)}\n`),
      '',
    );
  },
});

StyleDictionary.registerFormat({
  name: 'typescript/nested-declarations',
  formatter: function ({ dictionary }) {
    const tokens = minifyDictionary(dictionary.tokens);

    return Object.keys(tokens).reduce(
      (acc, key) =>
        (acc += `export const ${key} = ${JSON.stringify(
          tokens[key],
          null,
          2,
        )}\n`),
      '',
    );
  },
});

StyleDictionary.registerFilter({
  name: 'not_asset',
  matcher: function (token) {
    return token.attributes.category !== 'asset';
  },
});

StyleDictionary.registerTransform({
  name: 'value/font',
  type: 'value',
  transformer: (prop) => {
    const [, , fontName] = prop.path;
    return fontName.replace(/_/g, ' ');
  },
});

module.exports = {
  source: ['src/**/*.js'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      transforms: ['value/font', 'attribute/font'],
      files: [
        {
          format: 'javascript/nested',
          destination: 'index.js',
          filter: 'not_asset',
        },
        {
          format: 'typescript/nested-declarations',
          destination: 'index.d.ts',
          filter: 'not_asset',
        },
      ],
    },
    assets: {
      transformGroup: 'assets',
      buildPath: 'dist/',
      actions: ['copy_assets'],
    },
    'css-font-face': {
      transforms: ['attribute/font'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'fonts.css',
          format: 'font-face',
          filter: {
            attributes: {
              category: 'asset',
              type: 'font',
            },
          },
          options: {
            fontPathPrefix: './',
          },
        },
      ],
    },
  },
};
