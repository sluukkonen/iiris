import { lastIndexOf } from '../../src/array/lastIndexOf.js'

it('returns the index of the last matching value, or -1', () => {
  expect(lastIndexOf(1, [])).toEqual(-1)
  expect(lastIndexOf(1, [2, 3, 4])).toEqual(-1)

  expect(lastIndexOf(1, [1, 2, 3])).toEqual(0)
  expect(lastIndexOf(1, [1, 2, 3, 1])).toEqual(3)
})

it('follows SameValueZero semantics', () => {
  expect(lastIndexOf(0, [-0])).toBe(0)
  expect(lastIndexOf(-0, [0])).toBe(0)
  expect(lastIndexOf(NaN, [NaN])).toBe(0)
})

it('supports deep equality', () => {
  expect(lastIndexOf({}, [{}])).toBe(0)
  expect(lastIndexOf({ x: 1 }, [{}])).toBe(-1)
})
