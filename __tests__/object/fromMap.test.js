import { fromObject } from '../../src/map/fromObject.js'
import { fromMap } from '../../src/object/fromMap.js'

it('converts a map to an object', () => {
  const obj = { a: 1, b: 2, c: 3 }
  expect(fromMap(fromObject(obj))).toEqual(obj)
})
