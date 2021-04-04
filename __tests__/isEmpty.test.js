import { isEmpty } from '../src/isEmpty'

it('returns whether an array is empty', () => {
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([1])).toBe(false)
})
