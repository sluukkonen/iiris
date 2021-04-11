import { intersection } from './intersection.js'
import { from } from './from.js'

it('calculates the intersection of two sets', () => {
  expect(intersection(from([1, 2, 3]), from([3, 4, 5]))).toEqual(from([3]))
})
