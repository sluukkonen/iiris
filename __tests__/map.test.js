import { inc } from '../src/inc'
import { map } from '../src/map'

it('applies a function to each element of an array', () => {
  expect(map(inc, [])).toEqual([])
  expect(map(inc, [1])).toEqual([2])
  expect(map(inc, [1, 2])).toEqual([2, 3])
  expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4])
})
