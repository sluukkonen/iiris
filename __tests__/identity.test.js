import { identity } from '../src'

describe('identity()', () => {
  it('returns the first argument', () => {
    expect(identity(1, 2)).toEqual(1)
    expect(identity(2, 1)).toEqual(2)
  })
})
