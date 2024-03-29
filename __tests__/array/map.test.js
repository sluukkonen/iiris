import { inc } from '../../src/inc.js'
import { map } from '../../src/array/map.js'

it('applies a function to each element of an array', () => {
  expect(map(inc, [])).toEqual([])
  expect(map(inc, [1])).toEqual([2])
  expect(map(inc, [1, 2])).toEqual([2, 3])
  expect(map(inc, [1, 2, 3])).toEqual([2, 3, 4])
})
