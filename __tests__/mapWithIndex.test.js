import { mapWithIndex } from '../src/mapWithIndex'

it('maps each element in an array and supplies the element index to the function', () => {
  const fn = (...args) => args

  expect(mapWithIndex(fn, [])).toEqual([])
  expect(mapWithIndex(fn, [1])).toEqual([[0, 1]])
  expect(mapWithIndex(fn, [1, 2])).toEqual([
    [0, 1],
    [1, 2],
  ])
  expect(mapWithIndex(fn, [1, 2, 3])).toEqual([
    [0, 1],
    [1, 2],
    [2, 3],
  ])
})
