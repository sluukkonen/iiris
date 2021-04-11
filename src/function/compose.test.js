import { inc } from '../math/inc.js'
import { compose } from './compose.js'

it('composes functions from right to left', () => {
  const toString = (x) => x.toString()
  const fromString = (x) => parseInt(x, 10)

  expect(compose(inc)(1)).toBe(2)
  expect(compose(toString, inc)(1)).toBe('2')
  expect(compose(fromString, toString, inc)(1)).toBe(2)
  expect(compose(inc, fromString, toString, inc)(1)).toBe(3)
  expect(compose(toString, inc, fromString, toString, inc)(1)).toBe('3')
})

it('throws an error if called without any arguments', () => {
  expect(() => compose()).toThrow(
    new TypeError('compose: empty argument list!')
  )
})

it('returns functions with the name `compose1`', () => {
  expect(compose(inc).name).toBe('inc')
  expect(compose(inc, inc).name).toBe('compose2')
  expect(compose(inc, inc, inc).name).toBe('compose3')
  expect(compose(inc, inc, inc, inc).name).toBe('composeN')
  expect(compose(inc, inc, inc, inc, inc).name).toBe('composeN')
})
