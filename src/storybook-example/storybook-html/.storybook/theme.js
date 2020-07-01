import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',

  colorPrimary: 'hotpink',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#f8f8f8',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'plum',
  barSelectedColor: 'white',
  barBg: 'purple',

  // Form colors
  inputBg: 'white',
  inputBorder: '#f7f7f7',
  inputTextColor: 'black',
  inputBorderRadius: 6,

  brandTitle: 'My Storybook',
  brandUrl: 'https://www.google.co.jp',
  brandImage: 'https://placehold.it/350x150',
});
