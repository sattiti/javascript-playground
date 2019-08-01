const axios  = require('axios')
const jsdom  = require('jsdom')
const jQuery = require('jquery')
const $      = jQuery((new jsdom.JSDOM()).window)

const url    = 'https://www.apple.com'
const client = axios.get(url)

client
  .then(res=>{
    if(res.status === 200){
      const doc = $(res.data)

      doc.find('a').each((i, o)=>{
        console.log(`[${i}] ${$(o).text()}: ${$(o).attr('href')}`)
      })
    }
  })
  .catch(err=>{
    console.log(err.message)
  })
  .finally(()=>{})
