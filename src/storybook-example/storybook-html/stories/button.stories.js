import { action } from '@storybook/addon-actions'
import buttonSrc from '../src/components/pug/button.pug'
import category from '../src/components/categories.js'

export default {
  // title で階層をつくることができる。
  // Demo/
  //   a/
  //     b/
  //       c/
  title: `CSF Style | UI/${category.button}`,

  // id は url 指定することができる。
  // ?path=/story/c-d-e--MODULE_NAME
  id: 'c/s/f',

  // component: [],
  // decorators: [],
  // parameters: {},
  // includeStories: [] | /.*Story$/,
  // excludeStories: [] | /.Data$/,
};

// button
export const Button = ()=>{
  const b = document.createElement('button');
  b.type = 'button';
  b.innerText = 'Hello Button';
  b.addEventListener('click', (e)=>{
    console.log(e)
    action({
      onClick: e,
      onMouseOver: 'mouse'
    })
  });
  return b.outerHTML
}

// 表示名を変更することができる。
Button.story = {
  name: 'hello button',
  parameters: {
    docs: {
      disable: true,
      page: null,
    }
  }
}
