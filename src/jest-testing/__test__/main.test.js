// Global {{{
describe('Global API', ()=>{
  // Before, After {{{
  // afterAll(fn, timeout)
  // Runs a function AFTER ALL THE TESTS in this file have completed.

  // beforeAll(fn, timeout)
  // Runs a function BEFORE ALL THE TESTS in this file have completed.

  // afterEach(fn, timeout)
  // Runs a function AFTER EACH ONE OF THE TESTS in this file completes.

  // beforeEach(fn, timeout)
  // Runs a function BEFORE EACH ONE OF THE TESTS in this file completes.
  // }}}

  // Describe {{{
  // describe(name, fn)
  // Creates a block that groups together several related tests.

  // describe.each(table:Array)(name:String(printf format), fn, timeout)
  // Allow you to write the test suites once and passing different data in.
  describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected)=>{
    test(`${a} + ${b} = ${expected}`, () => {
      expect(a + b).toBe(expected);
    });

    test(`${a} + ${b} <= ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`${a} + ${b} >= ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  });

  // describe.only(name, fn)
  // describe.only.each(table)(name, fn)
  // 複数の describe ブロックの中から、一つの describe ブロックだけ実行したい時に使用する。

  // describe.skip(name, fn)
  // describe.skip.each(table)(name, fn)
  // describe をスキップする。
})
// }}}

// Test {{{
// `test` の別名は `it`

// test(name, fn, timeout)

// test.only(name, fn, timeout)

// test.skip(name, fn)

// test.todo(name)
// These tests will be highlighted in the summary output at the end so you know how many tests you still need todo.
test.todo('Todo Message.');

// test.each(table)(name, fn, timeout)
// test.skip.each(table)(name, fn)
// test.only.each(table)(name, fn)
// }}}
// }}}

// Expect {{{
describe.only('Expect API', ()=>{
  // expect(value)
  // 値をテストしたい時に毎回使用する関数。

  // expect.extend(matchersFn)
  // Jest に独自の matcher を追加したい場合使用する。

  // expect.anything()
  // null または undefined 以外、すべてに一致する。
  test('expect.anything()', ()=>{
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything())
  });

  // expect.any(constructor)
  // 与えられたコンストラクタで生成されたもの全てに一致する。
  test('expect.any(constructor)', ()=>{
    expect.assertions(1);

    const mock = jest.fn();
    mock(Math.floor(Math.random() * 10 + 1))

    expect(mock).toBeCalledWith(expect.any(Number))
  })

  // expect.assertions(number)
  // テスト中に特定の数だけアサーション (expect 何個が呼び出されたか) が呼び出されたことを確認する。
  // 非同期のコードをテストにおいて、コールバック中のアサーションが実際に呼ばれたことを確認する際に便利。

  // expect.hasAssertions()
  // テスト中で少なくとも1回はアサーションが呼び出されたことを確認する。

  // expect.arrayContaining(array)
  // expect.not.arrayContaining(array)
  // 受け取った配列が期待される配列の要素全てを含む場合に一致する。
  test('expect.arrayContaining(array)', ()=>{
    expect(['Bob', 'Eve']).toEqual(expect.arrayContaining(['Bob', 'Eve']))
  })

  // expect.objectContaining(object)
  // expect.not.objectContaining(object)

  // expect.stringContaining(string)
  // expect.not.stringContaining(string)
  // Matches a received (array | object | string) which does not contain ALL OF THE ELEMENTS IN THE EXPECTED (array | object | string).

  // expect.stringMatching(string | regexp)
  // expect.not.stringMatching(string | regexp)
  test('expect.not.stringMatching(regexp)', ()=>{
    const expected = /Hello world!/;
    expect('How are you?').toEqual(expect.not.stringMatching(expected));
  })

  // expect.addSnapshotSerializer(serializer)
  // アプリケーション独自のデータ構造をフォーマットするモジュールを追加することができる。

  // .not

  // .resolves
  // .rejects
  // Promise 用。

  // .toHaveBeenCalled()
  // .toHaveBeenCalledTimes(number)
  // .toHaveBeenCalledWith(arg1, arg2, ...)
  // .toHaveBeenLastCalledWith(arg1, arg2, ...)
  // .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)
  // 呼び出し関連のテスト用。

  // .toHaveReturned()
  // .toHaveReturnedTimes(number)
  // .toHaveReturnedWith(value)
  // .toHaveLastReturnedWith(value)
  // .toHaveNthReturnedWith(nthCall, value)
  // Return 関連のテスト用。

  // .toHaveLength(number)
 
  // .toHaveProperty(keyPath, value?)

  // .toBe(value)

  // .toBeCloseTo(number, numDigits?)
  // 小数点の場合に使う。

  // .toBeLessThan(number | bigint)
  // .toBeGreaterThan(number | bigint)
  // lt, gt

  // .toBeGreaterThanOrEqual(number | bigint)
  // .toBeLessThanOrEqual(number | bigint)
  // le, ge
 
  // .toBeInstanceOf(Class)
  // instanceof

  // .toBeDefined()
  // .toBeUndefined()
  // defined | undefined.

  // .toBeNull()
  // null.

  // .toBeTruthy()
  // .toBeFalsy()
  // true | false

  // .toBeNaN()

  // .toContain(item)
  // .toContainEqual(item)

  // .toEqual(value)

  // .toMatch(regexpOrString)

  // .toMatchObject(object)

  // .toMatchSnapshot(propertyMatchers?, hint?)
  // .toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)

  // .toStrictEqual(value)
  // To test that objects have the same types as well as structure.
  test('.toStrictEqual', () => {
    class A{
      constructor(v){
        this.v = v
      }
    }
    expect(new A('apple')).toEqual({v: 'apple'});
    expect(new A('apple')).not.toStrictEqual({v: 'apple'});
  });

  // .toThrow(error?)
  // .toThrowErrorMatchingSnapshot(hint?)
  // .toThrowErrorMatchingInlineSnapshot(inlineSnapshot)
  // Error 関連。
})
// }}}

// Testing {{{
describe('Jest First Testing', ()=>{
  test('1+2=3', (done)=>{
    expect(1 + 2).toBe(3)
    done()
  })
})
// }}}
