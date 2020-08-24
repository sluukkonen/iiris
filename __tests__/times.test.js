import { identity } from '../src/identity'
import { inc } from '../src/inc'
import { times } from '../src/times'

it('creates an array with the specified function', () => {
  expect(times(identity, 3)).toEqual([0, 1, 2])
  expect(times(inc, 3)).toEqual([1, 2, 3])
})

it('throws an error if n is negative', () => {
  expect(() => times(identity, -1)).toThrowError(
    new RangeError('Invalid array length')
  )
})

it('throws an error if n is not an integer', () => {
  expect(() => times(identity, 2.5)).toThrowError(
    new RangeError('Invalid array length')
  )
})
