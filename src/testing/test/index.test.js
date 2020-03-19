'use strict'

// TDD {{{
// Test Driven Development (テスト駆動開発)
// テストファーストに基づく設計手法。
// }}}
// BDD {{{
// Behavior Driven Development (振る舞い駆動開発)
// 作成したプログラムの動作が正しいかどうかを検証するために行う「テスト」である。
// }}}
// mocha run cycle {{{
// describe
//   before
//   beforeEach
// it
//   afterEach
//   after
// }}}
const chai   = require('chai')
const expect = chai.expect
const assert = chai.assert

describe('Array', function(){
  before(function(){
    console.log('[BEFORE]')
    console.log('runs ONCE before the first test in this block.')
     
  })

  after(function(){
    console.log('[AFTER]')
    console.log('runs once after the last test in this block.')
  })

  beforeEach(function(){
    // retry 2 times
    this.retries(2)

    if(Math.round(Math.random()*2) === 1){
      // skip
      console.log('[SKIP]')
      this.skip()
    }
    console.log('  [BEFORE_EACH]')
    console.log('  runs before each test in this block.')
  })

  afterEach(function(){
    console.log('  [AFTER_EACH]')
    console.log('  runs after each test in this block.')
  })

  describe('#indexOf', function(){
    it('should return -1 when the value is not present', function(){
      const ary = [1, 2, 5]
      assert.equal(ary.indexOf(4), -1);
    })
  })

  // skip
  describe.skip('#length', function(){
    it('should return the lenght', function(){
      const ary = [1, 2, 4]
      assert.equal(ary.length, ary.length)
    })
  })

  // exclusive test
  // only をつけたテストだけ実行される。
  describe.only('#concat', function(){
    // timeout
    this.timeout(1000)

    // slow
    this.slow(10000000)

    it('should ary.length + ary2.length be same size', function(){
      const ary = [1, 3, 5]
      const ary2 = [2, 4, 6]
      assert.equal(ary.concat(ary2).length, ary.length + ary2.length)

    })
  })
})

