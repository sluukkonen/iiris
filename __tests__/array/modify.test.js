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

it('removes the element if value is undefined and index is within bounds', () => {
  const arr = [1, 2, 3]

  expect(modify(-4, noop, arr)).toEqual([1, 2, 3])
  expect(modify(-3, noop, arr)).toEqual([2, 3])
  expect(modify(-2, noop, arr)).toEqual([1, 3])
  expect(modify(-1, noop, arr)).toEqual([1, 2])
  expect(modify(0, noop, arr)).toEqual([2, 3])
  expect(modify(1, noop, arr)).toEqual([1, 3])
  expect(modify(2, noop, arr)).toEqual([1, 2])
  expect(modify(3, noop, arr)).toEqual([1, 2, 3])
})

it('throws an error if the target is nil', () => {
  const one = () => 1

  expect(() => modify(0, one, null)).toThrowError(TypeError)
  expect(() => modify(1, one, undefined)).toThrowError(TypeError)
})
