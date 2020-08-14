import { identity } from '../src'

describe('identity()', () => {
  it('returns the first argument', () => {
    expect(identity(1)).toEqual(1)
  })

  it('ignores extra arguments', () => {
    expect(identity(1, 2)).toEqual(1)
  })
})
