import { omitBy } from '../src/omitBy'

it('omits values from an object based on a predicate', () => {
  const isEven = (x) => x % 2 === 0

  expect(omitBy(isEven, {})).toEqual({})
  expect(omitBy(isEven, { a: 1 })).toEqual({ a: 1 })
  expect(omitBy(isEven, { a: 1 })).toEqual({ a: 1 })
  expect(omitBy(isEven, { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 })
})

it('considers only own keys', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2 })

  expect(omitBy(() => false, obj)).toEqual({ b: 2 })
})
