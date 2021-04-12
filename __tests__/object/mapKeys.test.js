import { mapKeys } from '../../src/object/mapKeys.js'

const toUpper = (k) => k.toUpperCase()

it('maps the keys of an object', () => {
  expect(mapKeys(toUpper, {})).toEqual({})
  expect(mapKeys(toUpper, { a: 1 })).toEqual({ A: 1 })
  expect(mapKeys(toUpper, { a: 1, b: 2 })).toEqual({ A: 1, B: 2 })
  expect(mapKeys(toUpper, { a: 1, b: 2, c: 3 })).toEqual({ A: 1, B: 2, C: 3 })
})

it('considers only the own keys of an object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2 })

  expect(mapKeys(toUpper, obj)).toEqual({ B: 2 })
})
