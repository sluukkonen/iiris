import { intersectionWith } from './intersectionWith.js'

it('calculates the set intesection of two arrays', () => {
  const eq = (a, b) => a === b
  expect(intersectionWith(eq, [], [])).toEqual([])
  expect(intersectionWith(eq, [1], [])).toEqual([])
  expect(intersectionWith(eq, [], [1])).toEqual([])
  expect(intersectionWith(eq, [1], [1])).toEqual([1])
  expect(intersectionWith(eq, [1, 2], [1])).toEqual([1])
  expect(intersectionWith(eq, [1], [1, 2])).toEqual([1])
  expect(intersectionWith(eq, [1], [1, 2])).toEqual([1])
  expect(intersectionWith(eq, [1, 2], [1, 2])).toEqual([1, 2])
})
