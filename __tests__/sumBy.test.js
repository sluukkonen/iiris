import { identity } from '../src/identity'
import { sumBy } from '../src/sumBy'
import { times } from '../src/times'

it('it calculates the sum of an array according to a function', () => {
  const getA = (x) => x.a
  const mkA = (a) => ({ a })
  expect(sumBy(getA, times(mkA, 100))).toBe(4950)
})

it('returns 0 for an empty array', () => {
  expect(sumBy(identity, [])).toBe(0)
})
