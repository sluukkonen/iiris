import { pair } from './pair.js'

it('creates a pair from the first two arguments', () => {
  expect(pair(1, 2)).toEqual([1, 2])
  expect(pair(2, 1)).toEqual([2, 1])
})
