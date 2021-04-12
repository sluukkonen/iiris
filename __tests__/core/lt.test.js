import { lt } from '../../src/core/lt.js'

it('returns whether the second value is less than the first', () => {
  expect(lt(1, 0)).toBe(true)
  expect(lt(0, 1)).toBe(false)
  expect(lt(0, 0)).toBe(false)
})
