import { flatMap } from './flatMap.js'

it('flatMap()', () => {
  const twice = (x) => [x, x]
  expect(flatMap(twice, [])).toEqual([])
  expect(flatMap(twice, [1])).toEqual([1, 1])
  expect(flatMap(twice, [1, 2])).toEqual([1, 1, 2, 2])
  expect(flatMap(twice, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})
