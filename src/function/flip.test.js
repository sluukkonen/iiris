import { flip } from './flip.js'

it('flips the first two arguments', () => {
  const fn = (...args) => args
  const flipped = flip(fn)

  expect(flipped(1)).toEqual([undefined, 1])
  expect(flipped(1, 2)).toEqual([2, 1])
  expect(flipped(1, 2, 3)).toEqual([2, 1])
})
