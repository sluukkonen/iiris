import { inc } from '../src/inc'
import { groupMap } from '../src/groupMap'

it('partitions an array into separate arrays based on keyFn and maps each value with mapFn', () => {
  expect(groupMap(Math.floor, inc, [])).toEqual({})

  expect(groupMap(Math.floor, inc, [1])).toEqual({
    '1': [2],
  })
  expect(groupMap(Math.floor, inc, [1, 1.5])).toEqual({
    '1': [2, 2.5],
  })
  expect(groupMap(Math.floor, inc, [1, 1.5, 2])).toEqual({
    '1': [2, 2.5],
    '2': [3],
  })
  expect(groupMap(Math.floor, inc, [1, 1.5, 2, 3.5])).toEqual({
    '1': [2, 2.5],
    '2': [3],
    '3': [4.5],
  })
})
