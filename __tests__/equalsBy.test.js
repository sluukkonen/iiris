import { equalsBy } from '../src/equalsBy'

it('maps two values with the function and checks if the results are equal', () => {
  expect(equalsBy(Math.abs, 5, -5)).toBe(true)
  expect(equalsBy(Math.abs, -5, 5)).toBe(true)

  expect(equalsBy(Math.abs, 4, 6)).toBe(false)
})
