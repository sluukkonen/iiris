import { isMap } from '../src'

it('returns whether the value is a Map', () => {
  expect(isMap(new Map())).toBe(true)
  expect(isMap({})).toBe(false)
  expect(isMap(null)).toBe(false)
})
