import { difference } from '../../src/set/difference.js'
import { from } from '../../src/set/from.js'

it('calculates the difference of two sets', () => {
  expect(difference(from([1, 2, 3]), from([3, 4, 5]))).toEqual(from([1, 2]))
})
