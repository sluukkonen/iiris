import { differenceWith } from '../src/differenceWith'

it('calculates the set difference of two arrays', () => {
  const eq = (a, b) => a === b
  expect(differenceWith(eq, [], [])).toEqual([])
  expect(differenceWith(eq, [1], [])).toEqual([1])
  expect(differenceWith(eq, [], [1])).toEqual([])
  expect(differenceWith(eq, [1], [1])).toEqual([])
  expect(differenceWith(eq, [1, 2], [1])).toEqual([2])
  expect(differenceWith(eq, [1], [1, 2])).toEqual([])
  expect(differenceWith(eq, [1], [1, 2])).toEqual([])
  expect(differenceWith(eq, [1, 2], [1, 2])).toEqual([])
})
