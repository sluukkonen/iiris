import { add } from '../../src/add.js'

it('adds two numbers together', () => {
  expect(add(1, 2)).toEqual(3)
  expect(add(2, 1)).toEqual(3)
})
