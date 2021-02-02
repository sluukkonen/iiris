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

it('returns undefined if the target is not an object', () => {
  expect(prop('a', null)).toBeUndefined()
  expect(prop('a', undefined)).toBeUndefined()
  expect(prop('length', '')).toBeUndefined()

  expect(prop('a')(null)).toBeUndefined()
  expect(prop('a')(undefined)).toBeUndefined()
  expect(prop('length')('')).toBeUndefined()
})
