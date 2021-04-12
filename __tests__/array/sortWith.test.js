import { ascend } from '../../src/function/ascend.js'
import { descend } from '../../src/function/descend.js'
import { sortWith } from '../../src/array/sortWith.js'

it('sorts an array with the help of an array of comparators', () => {
  const byAgeAsc = ascend((x) => x.age)
  const byNameDesc = descend((x) => x.name)
  const nullCmp = () => 0

  const people = [
    { name: 'Sakumatti', age: 32 },
    { name: 'Tarja', age: 76 },
    { name: 'Tarja', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Josef', age: 34 },
    { name: 'Laura', age: 46 },
  ]
  expect(sortWith([], people)).toEqual(people)
  expect(sortWith([byAgeAsc], people)).toEqual([
    { name: 'Sakumatti', age: 32 },
    { name: 'Tarja', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Josef', age: 34 },
    { name: 'Laura', age: 46 },
    { name: 'Tarja', age: 76 },
  ])
  expect(sortWith([byAgeAsc, byNameDesc], people)).toEqual([
    { name: 'Tarja', age: 32 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Josef', age: 34 },
    { name: 'Laura', age: 46 },
    { name: 'Tarja', age: 76 },
  ])
  expect(sortWith([byNameDesc, byAgeAsc], people)).toEqual([
    { name: 'Tarja', age: 32 },
    { name: 'Tarja', age: 76 },
    { name: 'Sanna', age: 34 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Laura', age: 46 },
    { name: 'Josef', age: 34 },
  ])
  expect(sortWith([nullCmp, byNameDesc, byAgeAsc], people)).toEqual([
    { name: 'Tarja', age: 32 },
    { name: 'Tarja', age: 76 },
    { name: 'Sanna', age: 34 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Laura', age: 46 },
    { name: 'Josef', age: 34 },
  ])
  expect(sortWith([nullCmp, nullCmp, byAgeAsc, byNameDesc], people)).toEqual([
    { name: 'Tarja', age: 32 },
    { name: 'Sakumatti', age: 32 },
    { name: 'Sanna', age: 34 },
    { name: 'Josef', age: 34 },
    { name: 'Laura', age: 46 },
    { name: 'Tarja', age: 76 },
  ])
})
