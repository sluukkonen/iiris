import { fromObject } from '../../src/map/fromObject.js'

it('converts an object to a map', () => {
  const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ])
  expect(fromObject({ a: 1, b: 2, c: 3 })).toEqual(map)
})

it('considers only the own properties of the object', () => {
  const obj = Object.assign(Object.create({ a: 1 }), { b: 2 })
  expect(fromObject(obj)).toEqual(new Map([['b', 2]]))
})
