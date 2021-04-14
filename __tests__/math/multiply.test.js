import { multiply } from '../../src/multiply.js'

it('multiplies two numbers together', () => {
  expect(multiply(3, 4)).toEqual(12)
  expect(multiply(4, 3)).toEqual(12)
})
