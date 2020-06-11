'use strict'

const fs     = require('fs')
const axios  = require('axios')
const moxios = require('moxios')
const Papa   = require('papaparse')
const chai   = require('chai')
const expect = chai.expect
const should = chai.should()

const csvFile = __dirname + '/../data/data-list.csv'

describe('Mocking axios requests', ()=>{
  beforeEach(()=>{
    moxios.install()
  })

  afterEach(()=>{
    moxios.uninstall()
  })

  // request setting
  moxios.stubRequest('/data/data-list.csv', {
    status: 200,
    responseText: fs.readFileSync(csvFile)
  })

  it('get mock CSV', ()=>{
    axios.get('/data/data-list.csv')
    .then((res)=>{

      const csvData = res.data.toString()
      Papa.parse(csvData, {
        header: true,
        skipEmptyLine: true,
        complete: (results)=>{
          results.data.should.be.an('array')
        }
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  })

  it('get mock CSV Status is OK', ()=>{
    axios.get('/data/deviceList.csv')
    .then((res)=>{
      expect(res.status).to.be.equal(200)
    })
  })

})
