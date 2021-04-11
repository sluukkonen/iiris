import { union } from './union.js'
import { from } from './from.js'

it('calculates the union of two sets', () => {
  expect(union(from([1, 2, 3]), from([3, 4, 5]))).toEqual(from([1, 2, 3, 4, 5]))
})
