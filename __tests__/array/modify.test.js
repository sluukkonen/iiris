import { noop } from '../../src/noop.js'
import { inc } from '../../src/inc.js'
import { modify } from '../../src/array/modify.js'

it('sets the element at an index to the specified value', () => {
  const arr = [1, 2, 3]

  expect(modify(-3, inc, arr)).toEqual([2, 2, 3])
  expect(modify(-2, inc, arr)).toEqual([1, 3, 3])
  expect(modify(-1, inc, arr)).toEqual([1, 2, 4])
  expect(modify(0, inc, arr)).toEqual([2, 2, 3])
  expect(modify(1, inc, arr)).toEqual([1, 3, 3])
  expect(modify(2, inc, arr)).toEqual([1, 2, 4])
})

it('returns the original array if the index is out of bounds', () => {
  const arr = [1, 2, 3]

  expect(modify(-4, noop, arr)).toBe(arr)
  expect(modify(3, noop, arr)).toBe(arr)
})

it('writes undefined if the new value is undefined', () => {
  const arr = [1, 2, 3]

  expect(modify(0, noop, arr)).toEqual([undefined, 2, 3])
})

it('throws an error if the target is nil', () => {
  const one = () => 1

  expect(() => modify(0, one, null)).toThrowError(TypeError)
  expect(() => modify(1, one, undefined)).toThrowError(TypeError)
})
