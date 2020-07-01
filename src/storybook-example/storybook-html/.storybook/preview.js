import { addDecorator } from '@storybook/html'
import { withHTML } from '@whitespace/storybook-addon-html/html'

addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  }),
);
