import { identity } from '../../src/function/identity.js'

it('returns the first argument', () => {
  expect(identity(1, 2)).toEqual(1)
  expect(identity(2, 1)).toEqual(2)
})