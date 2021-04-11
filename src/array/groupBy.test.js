import { groupBy } from './groupBy.js'

it('groupBy()', () => {
  expect(groupBy(Math.floor, [1, 2, 3])).toEqual({
    1: [1],
    2: [2],
    3: [3],
  })

  expect(groupBy(Math.floor, [1, 1.5, 2, 3])).toEqual({
    1: [1, 1.5],
    2: [2],
    3: [3],
  })

  expect(groupBy(Math.floor, [1, 1.5, 2, 2.1, 3])).toEqual({
    1: [1, 1.5],
    2: [2, 2.1],
    3: [3],
  })
})
