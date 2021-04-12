import { merge } from '../../src/object/merge.js'

it('merges two objects, prefering the values on the right side', () => {
  expect(merge({}, {})).toEqual({})

  expect(merge({ a: 1 }, {})).toEqual({ a: 1 })
  expect(merge({}, { a: 2 })).toEqual({ a: 2 })
  expect(merge({ a: 1 }, { a: 2 })).toEqual({ a: 2 })

  expect(merge({ a: 1, b: 1 }, { a: 2 })).toEqual({ a: 2, b: 1 })
  expect(merge({ a: 1 }, { a: 2, b: 2 })).toEqual({ a: 2, b: 2 })
  expect(merge({ a: 1, b: 1 }, { a: 2, b: 2 })).toEqual({ a: 2, b: 2 })
})
