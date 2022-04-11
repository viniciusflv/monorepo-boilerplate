const React = require(`react`);
const gatsby = jest.requireActual(`gatsby-plugin-image`);

module.exports = {
  ...gatsby,
  StaticImage: jest
    .fn()
    .mockImplementation((props) => React.createElement(`img`, props)),
};
