import { pickBy } from '../src/pickBy'

it('picks values from an object based on a predicate', () => {
  const isEven = (x) => x % 2 === 0

  expect(pickBy(isEven, {})).toEqual({})
  expect(pickBy(isEven, { a: 1 })).toEqual({})
  expect(pickBy(isEven, { a: 1, b: 2 })).toEqual({ b: 2 })
  expect(pickBy(isEven, { a: 1, b: 2, c: 3 })).toEqual({ b: 2 })
})

it('considers only own keys', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2 })

  expect(pickBy(() => true, obj)).toEqual({ b: 2 })
})
