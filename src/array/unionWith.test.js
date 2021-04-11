import { unionWith } from './unionWith.js'

it('calculates the set union of two arrays', () => {
  const eq = (a, b) => a === b
  expect(unionWith(eq, [], [])).toEqual([])
  expect(unionWith(eq, [1], [])).toEqual([1])
  expect(unionWith(eq, [], [1])).toEqual([1])
  expect(unionWith(eq, [1], [1])).toEqual([1])
  expect(unionWith(eq, [1, 2], [1])).toEqual([1, 2])
  expect(unionWith(eq, [1], [1, 2])).toEqual([1, 2])
  expect(unionWith(eq, [1, 2], [1, 2])).toEqual([1, 2])
})
