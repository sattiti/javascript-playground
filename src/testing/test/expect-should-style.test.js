'use strict'

const chai   = require('chai')
const expect = chai.expect
const should = chai.should()

// Language Chains {{{
// to
// be
// been
// is
// does
// has
// have
// at
// of
// and
// with
// that
// which
// same
// but
// still
// }}}

describe('BBD Style', ()=>{
  // expact {{{
  describe('Expect Style', ()=>{
    it('Expect 1 is a number.', ()=>{
      expect(1).to.be.a('number')
    })
  })
  // }}}

  // should {{{
  describe('Should Style', ()=>{
    it('1 should not be a string.', ()=>{
      (1).should.not.be.a('string')
    })
  })
  // }}}

  // API {{{
  describe('API', ()=>{

    // .not
    describe('.not', ()=>{
      it('Negates all assertions.', ()=>{
        expect(1).to.not.be.an('array')
      })
    })

    // .deep
    //   .equal
    //   .include
    //   .members
    //   .keys
    //   .property
    describe('.deep', ()=>{
      it('Depply equality.', ()=>{
        expect({a: 1}).to.deep.equal({a: 1})
      })
    })

    // .nested
    //   .property
    //   .include
    describe('.nested', ()=>{
      it('Enables . and [] in all .property or .include assertions.', ()=>{
        expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]')
      })
    })

    // .own
    //   .property
    //   .include
    describe('.own', ()=>{
      it('Ignore inherited properties.', ()=>{
        expect({a: 1}).to.have.own.property('a')
      })
    })

    // .oedered
    //   .members
    describe('.ordered', ()=>{
      it('Require that members be in the same order.', ()=>{
        expect([1, 2]).to.have.ordered.members([1, 2]).and.not.have.ordered.members([2, 1])
      })
    })

    // .any
    //   .keys
    describe('.any', ()=>{
      it('Require that the target have all of the given keys.', ()=>{
        expect({a: 1, b: 2}).to.not.have.any.keys('c', 'd')
      })
    })

    // .all
    //   .keys
    describe('.all', ()=>{
      it('All keys is required.', ()=>{
        expect({a: 1, b: 2}).to.have.all.keys('a', 'b')
      })
    })

    // .a/.an
    //   string
    //   number
    //   object
    //   array
    //   null
    //   undefined
    //   error
    //   promise
    //   float32array
    //   symbol
    describe('.a(type[, msg]) / .an', ()=>{
      it('Type check', ()=>{
        expect(1).to.be.a('number')
      })
    })

    // .include
    describe('.include(val[, msg])', ()=>{
      it('Include.', ()=>{
        expect([1, 2, 3, 4, 5]).to.include(2)
      })
    })

    // ok
    describe('.ok', ()=>{
      it('Asserts that the target is a truthy value.', ()=>{
        expect(1).to.be.ok
      })
    })

    // true
    describe('.true', ()=>{
      it('===', ()=>{
        expect(1 === '1').to.not.be.true
      })
    })

    // false
    describe('.false', ()=>{
      it('!==', ()=>{
        expect(1 === '1').to.be.false
      })
    })

    // 
    describe('.null', ()=>{
      it('o === null', ()=>{
        expect(null).is.null
      })
    })

    // undefined
    describe('.undefined', ()=>{
      it('o === undefined', ()=>{
        var a
        expect(a).to.be.undefined
      })
    })

    // NaN
    describe('.NaN', ()=>{
      it('o === NaN', ()=>{
        expect('foo').to.not.be.NaN
      })
    })

    // exist
    describe('.exist', ()=>{
      it('Exist.', ()=>{
        var a = 1
        expect(a).to.be.exist
      })
    })

    // 
    describe('.empty', ()=>{
      it('Empty.', ()=>{
        expect('').to.be.empty
      })
    })

    // 
    describe('.arguments', ()=>{
      it('Asserts that the target is an arguments object.', ()=>{
        expect(arguments).to.be.arguments
      })
    })

    // 
    describe('.equal(val[, msg])', ()=>{
      it('===', ()=>{
        expect(1).to.not.be.equal('1')
      })
    })

    // 
    describe('.eql(val[, msg])', ()=>{
      it('Asserts that the target is deeply equal to the given object.', ()=>{
        expect({a: 1}).to.eql({a: 1}).but.not.equal({a: 1})
      })
    })

    // 
    describe('.above(n[, msg])', ()=>{
      it('>', ()=>{
        expect(2).to.be.above(1)
      })
    })

    // 
    describe('.least(n[, msg])', ()=>{
      it('>=', ()=>{
        expect(2).to.be.at.least(1)
      })
    })
    // 
    describe('.below(n[, msg])', ()=>{
      it('<', ()=>{
        expect(2).to.be.below(3)
      })
    })
    // 
    describe('.most(n[, msg])', ()=>{
      it('<=', ()=>{
        expect(1).to.be.at.most(1)
      })
    })
    // 
    describe('.within(start, finish[, msg])', ()=>{
      it('x >= n && x <= n', ()=>{
        expect(2).to.be.within(1, 3)
      })
    })
    // 
    describe('.instanceof(constructor[, msg])', ()=>{
      it('Asserts that the target is an instance of the given constructor.', ()=>{
        expect([1, 2]).to.be.an.instanceof(Array)
      })
    })

    // 
    describe('.property(name[, val[, msg]])', ()=>{
      it('Property.', ()=>{
        expect({a: 1}).to.have.property('a', 1)
      })
    })
    // 
    describe('.ownPropertyDescriptor(name[, descriptor[, msg]])', ()=>{
      it('Asserts that the target has its own property descriptor with the given key name.', ()=>{
        expect({a: 1}).to.have.ownPropertyDescriptor('a')
      })
    })
    // 
    describe('.match(re[, msg])', ()=>{
      it('Pattern match.', ()=>{
        expect('foobar').to.match(/^foo/)
      })
    })
    // 
    describe('.string(str[, msg])', ()=>{
      it('Asserts that the target string contains the given substring str.', ()=>{
        expect('foobar').to.have.string('bar')
      })
    })
    // 
    describe('.keys(key1[, key2[, …]])', ()=>{
      it('Keys', ()=>{
        expect({a: 1, b: 2}).to.have.all.keys('a', 'b')
      })
    })
    // 
    describe('.throw([errorLike], [errMsgMatcher], [msg])', ()=>{
      it('Invokes the target function and asserts that an error is thrown.', ()=>{
        var badFn = ()=>{throw new TypeError('')}
        expect(badFn).to.throw();
      })
    })

    // 
    describe('.respondTo(method[, msg])', ()=>{
      it('The target has a method with the given name method.', ()=>{
        expect(Array).to.respondTo('push')
      })
    })

    // 
    describe('.itself', ()=>{
      it('Itself', ()=>{
        var Cat = function(){}
        Cat.prototype.meow = function(){}
        Cat.hiss = function(){}
        expect(Cat).itself.to.respondTo('hiss').but.not.respondTo('meow')
      })
    })
    // 
    describe('.satisfy(matcher[, msg])', ()=>{
      it('Invokes the given matcher function with the target being passed as the first argument, and asserts that the value returned is truthy.', ()=>{
        expect(1).to.satisfy(function(num){
          return num > 0;
        });
      })
    })
    // 
    describe('.closeTo(expected, delta[, msg])', ()=>{
      it('Range', ()=>{
        expect(1.5).to.be.closeTo(2, 0.5)
      })
    })
    // 
    describe('.members(set[, msg])', ()=>{
      it('Asserts that the target array has the same members as the given array set.', ()=>{
        expect([1, 2, 2]).to.have.members([2, 1, 2])
      })
    })
    // 
    describe('.oneOf(list[, msg])', ()=>{
      it('Asserts that the target is a member of the given array list.', ()=>{
        expect(1).to.be.oneOf([1, 2, 3, 4])
      })
    })

    describe('.', ()=>{
      it('', ()=>{

      })
    })
     
    describe('.', ()=>{
      it('', ()=>{

      })
    })

    describe('.', ()=>{
      it('', ()=>{

      })
    })
  })
  // }}}
})

