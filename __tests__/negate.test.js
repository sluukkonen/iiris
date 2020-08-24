import { negate } from '../src/negate'

it('negates a number', () => {
  expect(negate(1)).toBe(-1)
  expect(negate(-1)).toBe(1)
})
