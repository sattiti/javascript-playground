import button from '../src/components/pug/button.pug'
import h1 from '../src/components/pug/h1.pug'

import '../src/sass/style.sass'
import { storiesOf } from '@storybook/html'


export default {
  title: 'Button With Pug'
}


const components = { h1, button }

// | でカテゴリ名を生成する。
const s = storiesOf('Pug Modules | UI', module)

for(let k in components){
  s.add(k, ()=>{
    return components[k]
  })
}
