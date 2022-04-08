import { color } from '@boilerplate/tokens';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const HIGHLIGHT_COLOR = color.base.blue;
const BACKGROUND_COLOR = '#fff';
const CONTROLS_COLOR = '#f9f9f9';
const TEXT_COLOR = '#555555';
const MUTED_TEXT_COLOR = '#a5a5a5';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    // fontCode: 'string',
    // fontBase: 'string',
    // brandUrl: 'string',
    // inputBorder: 'string',
    // gridCellSize: 'number',
    // appBorderRadius: 'number',
    // inputBorderRadius: 'number',
    // brandImage: `{{SVG_STRING}}`.replace(/\n|\s+\s/gm, ''),
    brandTitle: 'Boilerplate',
    base: 'dark',
    colorPrimary: HIGHLIGHT_COLOR,
    colorSecondary: HIGHLIGHT_COLOR,
    barSelectedColor: HIGHLIGHT_COLOR,
    appBg: CONTROLS_COLOR,
    appContentBg: CONTROLS_COLOR,
    appBorderColor: CONTROLS_COLOR,
    barBg: BACKGROUND_COLOR,
    inputBg: BACKGROUND_COLOR,
    textInverseColor: BACKGROUND_COLOR,
    textColor: TEXT_COLOR,
    barTextColor: MUTED_TEXT_COLOR,
    textMutedColor: MUTED_TEXT_COLOR,
    inputTextColor: MUTED_TEXT_COLOR,
  }),
  selectedPanel: undefined,
});
