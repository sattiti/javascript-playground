// preview.js の内容は全ての story に適応される。

// Decorators
// A decorator is a way to wrap a story with some formatting or some common set of components.

// Parameters
// Parameters are custom metadata for a story. 


import { addDecorator, addParameters } from '@storybook/html'
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