import { range } from './range.js'
import { uniq } from './uniq.js'

it('returns a new array with only the unique values from the source array', () => {
  expect(uniq([])).toEqual([])
  expect(uniq([1])).toEqual([1])
  expect(uniq([1, 2])).toEqual([1, 2])
  expect(uniq([1, 2, 3])).toEqual([1, 2, 3])
  expect(uniq([1, 2, 3, 1])).toEqual([1, 2, 3])
  expect(uniq([1, 2, 3, 1, 2])).toEqual([1, 2, 3])
  expect(uniq([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3])
})

it('compares objects deeply', () => {
  expect(uniq([{ a: 1 }])).toEqual([{ a: 1 }])
  expect(uniq([{ a: 1 }, { a: 1 }])).toEqual([{ a: 1 }])
  expect(uniq([{ a: 1 }, { a: 1 }, { b: 2 }])).toEqual([{ a: 1 }, { b: 2 }])
  expect(uniq([{ a: 1 }, { a: 1 }, { b: 2 }])).toEqual([{ a: 1 }, { b: 2 }])
})

it('larger arrays', () => {
  const large = range(0, 10000).map((n) => n % 10)

  expect(uniq(large)).toEqual(range(0, 10))
})
