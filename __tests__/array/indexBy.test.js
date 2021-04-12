import { indexBy } from '../../src/array/indexBy.js'

it('indexBy()', () => {
  expect(indexBy(Math.floor, [1, 2, 3])).toEqual({
    1: 1,
    2: 2,
    3: 3,
  })

  expect(indexBy(Math.floor, [1, 1.5, 2, 3])).toEqual({
    1: 1.5,
    2: 2,
    3: 3,
  })

  expect(indexBy(Math.floor, [1, 1.5, 2, 2.1, 3])).toEqual({
    1: 1.5,
    2: 2.1,
    3: 3,
  })
})
