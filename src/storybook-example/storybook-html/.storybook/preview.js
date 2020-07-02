// preview.js の内容は全ての *.stories.js に適応される。
import '../src/sass/style.sass'
import { configure, addDecorator, addParameters } from '@storybook/html'
import { withA11y } from '@storybook/addon-a11y'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withHTML } from '@whitespace/storybook-addon-html/html'

// Configure {{{
// configure を使い、まとめて stories をロードすることができる。
// configure(
//   [
//     require.context('PATH/TO/COMPONENTS-1', true, /\.stories\.js$/),
//     require.context('PATH/TO/COMPONENTS-2', true, /\.stories\.js$/),
//   ],
//   module
// )
// }}}
// Decorators {{{
// A decorator is a way to wrap a story with some formatting or some common set of components.

// show html
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 2,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  }),
)

// a11y
addDecorator(withA11y)

// Story Wrapper
addDecorator(
  (storyFn)=>{
    return `<div style="background-color: yellow;">${storyFn()}</div>`
  }
)
// }}}
// Parameters {{{
// Parameters are custom metadata for a story. 

// Viewport
addParameters({
  viewport: {
    disable: false,
    defaultViewport: 'responsive',
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
  }
})

// Docs Container
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
})
// }}}
