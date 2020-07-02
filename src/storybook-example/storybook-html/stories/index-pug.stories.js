import button from '../src/components/pug/button.pug'
import h1 from '../src/components/pug/h1.pug'
import h1Doc from '../src/components/docs/h1.mdx'
import buttonDoc from '../src/components/docs/button.mdx'
import { storiesOf } from '@storybook/html'

const components = {
  heading: [
    {name: 'h1', mod: h1, doc: h1Doc},
  ],
  buttons: [
    {name: 'button', mod: button, doc: buttonDoc},
  ],
}

// const story = storiesOf('Pug Modules | UI', module)

for(let category in components){
  let story = storiesOf(`Pug Modules | UI/${category}`, module)
  for(let i in components[category]){
    const o = components[category][i]
    story.add(
      o.name,
      ()=>{ return o.mod },
      {
        docs: {
          page: o.doc
        }
      }
    )
  }
}
