import { inc } from '../src/inc'
import { modifyAt } from '../src/modifyAt'
import { noop } from '../src/noop'

it('sets the element at an index to the specified value', () => {
  const arr = [1, 2, 3]

  expect(modifyAt(-3, inc, arr)).toEqual([2, 2, 3])
  expect(modifyAt(-2, inc, arr)).toEqual([1, 3, 3])
  expect(modifyAt(-1, inc, arr)).toEqual([1, 2, 4])
  expect(modifyAt(0, inc, arr)).toEqual([2, 2, 3])
  expect(modifyAt(1, inc, arr)).toEqual([1, 3, 3])
  expect(modifyAt(2, inc, arr)).toEqual([1, 2, 4])
})

it('removes the element if value is undefined and index is within bounds', () => {
  const arr = [1, 2, 3]

  expect(modifyAt(-4, noop, arr)).toEqual([1, 2, 3])
  expect(modifyAt(-3, noop, arr)).toEqual([2, 3])
  expect(modifyAt(-2, noop, arr)).toEqual([1, 3])
  expect(modifyAt(-1, noop, arr)).toEqual([1, 2])
  expect(modifyAt(0, noop, arr)).toEqual([2, 3])
  expect(modifyAt(1, noop, arr)).toEqual([1, 3])
  expect(modifyAt(2, noop, arr)).toEqual([1, 2])
  expect(modifyAt(3, noop, arr)).toEqual([1, 2, 3])
})

it('throws an error if the target is not an array', () => {
  const one = () => 1

  expect(() => modifyAt(0, one, null)).toThrowError(TypeError)
  expect(() => modifyAt(1, one, undefined)).toThrowError(TypeError)
  expect(() => modifyAt(0, one, {})).toThrowError(TypeError)
  expect(() => modifyAt(1, one, '')).toThrowError(TypeError)
})
