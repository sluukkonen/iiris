import { reduceRight } from '../src/reduceRight'

it('reduces an array from right to left', () => {
  const add = (a, b) => a + b

  expect(reduceRight(add, 0, [])).toEqual(0)
  expect(reduceRight(add, 0, [1])).toEqual(1)
  expect(reduceRight(add, 0, [1, 2])).toEqual(3)
  expect(reduceRight(add, 0, [1, 2, 3])).toEqual(6)
})
