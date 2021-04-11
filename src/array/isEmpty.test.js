import { isEmpty } from './isEmpty.js'

it('returns whether an array is empty', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([1])).toBe(false)
})
