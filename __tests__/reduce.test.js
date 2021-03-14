import { add } from '../src/add'
import { reduce } from '../src/reduce'

it('reduces an array from left to right', () => {
  expect(reduce(add, 0, [])).toEqual(0)
  expect(reduce(add, 0, [1])).toEqual(1)
  expect(reduce(add, 0, [1, 2])).toEqual(3)
  expect(reduce(add, 0, [1, 2, 3])).toEqual(6)
})
