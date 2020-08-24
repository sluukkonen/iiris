import { has } from '../src/has'

it('returns whether a property is an own property of the target object', () => {
  expect(has('a', { a: 1 })).toBe(true)
  expect(has('b', { a: 1 })).toBe(false)

  expect(has('a', Object.assign(Object.create({ a: 1 }), { b: 2 }))).toBe(false)
  expect(has('b', Object.assign(Object.create({ a: 1 }), { b: 2 }))).toBe(true)
})

it('supports symbols', () => {
  const sym = Symbol.for('')
  expect(has(sym, { [sym]: 1 })).toBe(true)
})

it('returns false for null or undefined', () => {
  expect(has('a', null)).toBe(false)
})
