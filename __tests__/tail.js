import { tail } from '../src'

it('returns every element of the array except the first', () => {
  expect(tail([])).toEqual([])
  expect(tail([1])).toEqual([])
  expect(tail([1, 2])).toEqual([2])
  expect(tail([1, 2, 3])).toEqual([2, 3])
})
