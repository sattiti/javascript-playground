// Mock Function {{{
describe('MockFn test', ()=>{
  // .mock
  // すべてのモック関数にはこの特別な .mock プロパティがあり、モック関数呼出し時のデータと関数の返り値が記録される。
  // .mock プロパティには、各呼出し時の this の値も記録されているため、this の値のチェックも可能。

  // mockFn.mock.calls
  // mockFn で行われたすべての呼出しの引数を含む配列が格納される。
 
  // mockFn.mock.results
  // mockFn に対して行われたすべての呼出しの結果を含む配列。

  // mockFn.mock.instances
  // mockFn からインスタンス化されたすべてのオブジェクトインスタンスを含む配列。

  // mockFn.mockName(value)
  // mockFn.getMockName()

  // mockFn.mockClear()
  // mockFn.mock.calls および mockFn.mock.instances 配列に格納されているすべての情報をリセット。

  // mockFn.mockReset()
  // mockFn.mockRestore()

  // mockFn.mockImplementation(fn)
  // mockFn を実装する。

  // mockFn.mockImplementationOnce(fn)
  // 同じ値で異なる結果を生み出すように複数の実装ができる。

  // mockFn.mockReturnThis()
  // mockFn の this を取得する。

  // mockFn.mockReturnValue(value)
  // mockFn の戻り値を設定する。

  // mockFn.mockReturnValueOnce(value)
  // mockFn の 1回のみの戻り値を設定する。

  // mockFn.mockResolvedValue(value)
  // mockFn.mockResolvedValueOnce(value)
  // mockFn.mockRejectedValue(value)
  // mockFn.mockRejectedValueOnce(value)
  // mockFn の Promise 版 resolve | reject の戻り値を設定する。

  const mockFn = jest
    .fn()
    .mockReturnValueOnce(40)
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce([1, 2, 3])
    .mockReturnValueOnce({a: 1});

    test("First: isNumber", ()=>{
      expect(mockFn()).toBeNumber()
    })

    test("Second: isString", ()=>{
      expect(mockFn()).toBeString()
    })

    test("Third: isArray", ()=>{
      expect(mockFn()).toBeArray()
    })

    test("Fouth: isObject", ()=>{
      expect(mockFn()).toBeObject()
    })
})
// }}}

