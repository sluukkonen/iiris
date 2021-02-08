import { fromMaybe } from '../src/fromMaybe'

it('returns the second argument if it is not undefined, default value otherwise', () => {
  expect(fromMaybe(999, 0)).toBe(0)
  expect(fromMaybe(999, undefined)).toBe(999)
})
