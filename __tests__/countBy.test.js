import { countBy } from '../src/countBy'

it('countBy()', () => {
  expect(countBy(Math.floor, [1, 2, 3])).toEqual({
    1: 1,
    2: 1,
    3: 1,
  })

  expect(countBy(Math.floor, [1, 1.5, 2, 3])).toEqual({
    1: 2,
    2: 1,
    3: 1,
  })

  expect(countBy(Math.floor, [1, 1.5, 2, 2.1, 3])).toEqual({
    1: 2,
    2: 2,
    3: 1,
  })
})
