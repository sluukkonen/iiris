import { mapMaybe } from './mapMaybe.js'

it('maps each element of the array, skipping the new value if it is undefined', () => {
  const fn = (x) => (x % 2 === 0 ? x * 2 : undefined)

  expect(mapMaybe(fn, [])).toEqual([])
  expect(mapMaybe(fn, [1])).toEqual([])
  expect(mapMaybe(fn, [1, 2])).toEqual([4])
  expect(mapMaybe(fn, [1, 2, 3])).toEqual([4])
  expect(mapMaybe(fn, [1, 2, 3, 4])).toEqual([4, 8])
})
