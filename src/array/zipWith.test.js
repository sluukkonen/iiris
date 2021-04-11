import { zipWith } from './zipWith.js'

const pair = (a, b) => [a, b]

it('zips two arrays together, combining the elements with the specified function', () => {
  expect(zipWith(pair, [1, 2, 3], ['a', 'b', 'c'])).toEqual([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
})

it('limits the length to the length of the smaller array', () => {
  expect(zipWith(pair, [1, 2, 3], ['a', 'b'])).toEqual([
    [1, 'a'],
    [2, 'b'],
  ])
  expect(zipWith(pair, [1, 2], ['a', 'b', 'c'])).toEqual([
    [1, 'a'],
    [2, 'b'],
  ])
})
