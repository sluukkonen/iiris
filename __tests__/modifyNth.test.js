import { inc } from '../src/inc'
import { modifyNth } from '../src/modifyNth'
import { noop } from '../src/noop'

it('sets the element at an index to the specified value', () => {
  const arr = [1, 2, 3]

  expect(modifyNth(-3, inc, arr)).toEqual([2, 2, 3])
  expect(modifyNth(-2, inc, arr)).toEqual([1, 3, 3])
  expect(modifyNth(-1, inc, arr)).toEqual([1, 2, 4])
  expect(modifyNth(0, inc, arr)).toEqual([2, 2, 3])
  expect(modifyNth(1, inc, arr)).toEqual([1, 3, 3])
  expect(modifyNth(2, inc, arr)).toEqual([1, 2, 4])
})

it('removes the element if value is undefined and index is within bounds', () => {
  const arr = [1, 2, 3]

  expect(modifyNth(-4, noop, arr)).toEqual([1, 2, 3])
  expect(modifyNth(-3, noop, arr)).toEqual([2, 3])
  expect(modifyNth(-2, noop, arr)).toEqual([1, 3])
  expect(modifyNth(-1, noop, arr)).toEqual([1, 2])
  expect(modifyNth(0, noop, arr)).toEqual([2, 3])
  expect(modifyNth(1, noop, arr)).toEqual([1, 3])
  expect(modifyNth(2, noop, arr)).toEqual([1, 2])
  expect(modifyNth(3, noop, arr)).toEqual([1, 2, 3])
})

it('throws an error if the target is nil', () => {
  const one = () => 1

  expect(() => modifyNth(0, one, null)).toThrowError(TypeError)
  expect(() => modifyNth(1, one, undefined)).toThrowError(TypeError)
})
