import { sortBy } from '../../src/array/sortBy.js'

it('sorts an array by mapping each value to an Ordered value', () => {
  const age = (x) => x.age
  const name = (x) => x.name

  const people = [
    { name: 'Sakumatti', age: 32 },
    { name: 'Tarja', age: 76 },
    { name: 'Sanna', age: 34 },
    { name: 'Laura', age: 46 },
  ]

  expect(sortBy(age, people)).toEqual([
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Laura', age: 46 },
    { name: 'Tarja', age: 76 },
  ])

  expect(sortBy(name, people)).toEqual([
    { name: 'Laura', age: 46 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Tarja', age: 76 },
  ])
})
