import { indexOf } from './indexOf.js'

it('returns the index of the value from the array, or -1', () => {
  expect(indexOf(1, [])).toBe(-1)
  expect(indexOf(1, [0])).toBe(-1)
  expect(indexOf(1, [0, 1, 1])).toBe(1)
})

it('uses SameValueZero semantics for primitives', () => {
  expect(indexOf(0, [-0])).toBe(0)
  expect(indexOf(-0, [0])).toBe(0)
  expect(indexOf(NaN, [NaN])).toBe(0)
  expect(indexOf(0, [1])).toBe(-1)
})

it('supports deep equality', () => {
  expect(indexOf({}, [{}])).toBe(0)
  expect(indexOf({}, [{ x: 1 }])).toBe(-1)
})
