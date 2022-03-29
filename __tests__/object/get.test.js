import { get } from '../../src/object/get.js'

it('retrieves a property from an object', () => {
  const obj = { a: 1, b: 2, c: 3 }

  expect(get('a', obj)).toBe(1)
  expect(get('b', obj)).toBe(2)
  expect(get('c', obj)).toBe(3)
  expect(get('d', obj)).toBe(undefined)

  expect(get('a')(obj)).toBe(1)
  expect(get('b')(obj)).toBe(2)
  expect(get('c')(obj)).toBe(3)
  expect(get('d')(obj)).toBe(undefined)
})

it('works for primitive objects as well', () => {
  expect(get('length', 'abc')).toBe(3)
})

it('throws an error if target is nil', () => {
  expect(() => get('a', null)).toThrowError(
    new TypeError(`Cannot read properties of null (reading 'a')`)
  )
})
