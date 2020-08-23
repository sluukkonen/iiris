import { countBy } from '../src'

it('it groups an array to a set of arrays, based on a key function', () => {
  expect(countBy(Math.floor, [1, 2, 3])).toEqual({
    '1': 1,
    '2': 1,
    '3': 1,
  })

  expect(countBy(Math.floor, [1, 1.5, 2, 3])).toEqual({
    '1': 2,
    '2': 1,
    '3': 1,
  })

  expect(countBy(Math.floor, [1, 1.5, 2, 2.1, 3])).toEqual({
    '1': 2,
    '2': 2,
    '3': 1,
  })
})
