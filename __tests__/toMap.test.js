import { toMap } from '../src/toMap'

it('toMap()', () => {
  expect(toMap(Object.entries({ a: 1, b: 2, c: 3 }))).toEqual(
    new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
  )
})
