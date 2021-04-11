import { zip } from './zip.js'

it('zips two arrays together', () => {
  expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
  ])
})

it('limits the length to the length of the smaller array', () => {
  expect(zip([1, 2, 3], ['a', 'b'])).toEqual([
    [1, 'a'],
    [2, 'b'],
  ])
  expect(zip([1, 2], ['a', 'b', 'c'])).toEqual([
    [1, 'a'],
    [2, 'b'],
  ])
})
