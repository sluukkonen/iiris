import { prop } from '../src/prop'

it('retrieves a property from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(prop('a', obj)).toBe(1)
  expect(prop('b', obj)).toBe(2)
  expect(prop('c', obj)).toBe(3)
  expect(prop('d', obj)).toBe(undefined)

  expect(prop('a')(obj)).toBe(1)
  expect(prop('b')(obj)).toBe(2)
  expect(prop('c')(obj)).toBe(3)
  expect(prop('d')(obj)).toBe(undefined)
})

it('works for primitive objects as well', () => {
  expect(prop('length', 'abc')).toBe(3)
})

it('throws an error if target is nil', () => {
  expect(() => prop('a', null)).toThrowError(
    new TypeError(`Cannot read property 'a' of null`)
  )
})
