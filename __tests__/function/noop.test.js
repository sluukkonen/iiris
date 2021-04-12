import { noop } from '../../src/function/noop.js'

it('returns undefined', () => {
  expect(noop(1)).toBeUndefined()
  expect(noop(1, 2)).toBeUndefined()
  expect(noop(1, 2, 3)).toBeUndefined()
})
