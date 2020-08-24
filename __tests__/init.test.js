import { init } from '../src/init'

it('returns every element of the array except the last', () => {
  expect(init([])).toEqual([])
  expect(init([1])).toEqual([])
  expect(init([1, 2])).toEqual([1])
  expect(init([1, 2, 3])).toEqual([1, 2])
})
