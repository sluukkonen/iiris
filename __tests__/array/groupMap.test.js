import { inc } from '../../src/inc.js'
import { groupMap } from '../../src/array/groupMap.js'

it('partitions an array into separate arrays based on keyFn and maps each value with mapFn', () => {
  expect(groupMap(inc, Math.floor, [])).toEqual({})

  expect(groupMap(inc, Math.floor, [1])).toEqual({
    1: [2],
  })
  expect(groupMap(inc, Math.floor, [1, 1.5])).toEqual({
    1: [2, 2.5],
  })
  expect(groupMap(inc, Math.floor, [1, 1.5, 2])).toEqual({
    1: [2, 2.5],
    2: [3],
  })
  expect(groupMap(inc, Math.floor, [1, 1.5, 2, 3.5])).toEqual({
    1: [2, 2.5],
    2: [3],
    3: [4.5],
  })
})

it('considers only own properties of the object', () => {
  expect(groupMap(inc, () => 'toString', [1, 2])).toEqual({ toString: [2, 3] })
})
