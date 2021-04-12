import { fromEntries } from '../../src/object/fromEntries.js'

it('creates a new object from an iterable of entries', () => {
  expect(
    fromEntries([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
  ).toEqual({ a: 1, b: 2, c: 3 })
  expect(
    fromEntries(
      new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ])
    )
  ).toEqual({ a: 1, b: 2, c: 3 })
  expect(fromEntries([])).toEqual({})
})

it('the returned objects have their prototype set to Object.prototype', () => {
  expect(Object.getPrototypeOf(fromEntries([]))).toBe(Object.prototype)
})
