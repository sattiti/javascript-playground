import button from '../src/components/pug/button.pug'
import h1 from '../src/components/pug/h1.pug'

import '../src/sass/style.sass'
import { storiesOf } from '@storybook/html'


export default {
  title: 'Button With Pug',
  component: {
  },
  decorators: [],
  parameters: {},
}

const components = { h1, button }

const s = storiesOf('Pug Modules', module)

for(let k in components){
  s.add(k, ()=>{
    return components[k]
  })
}
