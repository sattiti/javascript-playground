import h1Src from '../src/components/pug/h1.pug'
import h2Src from '../src/components/pug/h2.pug'
import h2v1Src from '../src/components/pug/h2v1.pug'
import h3Src from '../src/components/pug/h3.pug'
import h4Src from '../src/components/pug/h4.pug'
import h5Src from '../src/components/pug/h5.pug'
import h6Src from '../src/components/pug/h6.pug'
import category from '../src/components/categories.js'

export default {
  title: `CSF Style | UI/${category.heading}`,
  id: 'c/s/f',
  // component: [],
  // decorators: [],
  parameters: {
    docs: {
      disable: true,
      page: null
    }
  },
  // includeStories: [] | /.*Story$/,
  // excludeStories: [] | /.Data$/,
};

const h1   = ()=> { return h1Src }
const h2   = ()=> { return h2Src }
const h2v1 = ()=> { return h2v1Src }
const h3   = ()=> { return h3Src }
const h4   = ()=> { return h4Src }
const h5   = ()=> { return h5Src }
const h6   = ()=> { return h6Src }

// h1
h1.story = {
  name: 'h1',
  parameters: {
    docs: {
      disable: true,
      page: null,
    }
  }
}

export {
  h1,
  h2,
  h2v1,
  h3,
  h4,
  h5,
  h6,
}
