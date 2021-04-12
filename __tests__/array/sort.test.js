import { ascend } from '../../src/function/ascend.js'
import { sort } from '../../src/array/sort.js'

it('sorts an array with the help of an comparator', () => {
  const age = (x) => x.age
  const name = (x) => x.name

  const people = [
    { name: 'Sakumatti', age: 32 },
    { name: 'Tarja', age: 76 },
    { name: 'Sanna', age: 34 },
    { name: 'Laura', age: 46 },
  ]

  expect(sort(ascend(age), people)).toEqual([
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Laura', age: 46 },
    { name: 'Tarja', age: 76 },
  ])

  expect(sort(ascend(name), people)).toEqual([
    { name: 'Laura', age: 46 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Tarja', age: 76 },
  ])
})
