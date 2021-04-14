import { add } from '../../src/add.js'
import { reduceRight } from '../../src/array/reduceRight.js'

it('reduces an array from right to left', () => {
  expect(reduceRight(add, 0, [])).toEqual(0)
  expect(reduceRight(add, 0, [1])).toEqual(1)
  expect(reduceRight(add, 0, [1, 2])).toEqual(3)
  expect(reduceRight(add, 0, [1, 2, 3])).toEqual(6)
})
