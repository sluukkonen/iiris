import { intersection } from './intersection.js'

it('calculates the set intesection of two arrays', () => {
  expect(intersection([], [])).toEqual([])
  expect(intersection([1], [])).toEqual([])
  expect(intersection([], [1])).toEqual([])
  expect(intersection([1], [1])).toEqual([1])
  expect(intersection([1, 2], [1])).toEqual([1])
  expect(intersection([1], [1, 2])).toEqual([1])
  expect(intersection([1], [1, 2])).toEqual([1])
  expect(intersection([1, 2], [1, 2])).toEqual([1, 2])
})
