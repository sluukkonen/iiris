import { lt } from '../../src/core/lt.js'
import { dropWhile } from '../../src/array/dropWhile.js'

it('drops elements matching a predicate from the begining of array', () => {
  expect(dropWhile(lt(3), [])).toEqual([])
  expect(dropWhile(lt(3), [1])).toEqual([])
  expect(dropWhile(lt(3), [1, 2])).toEqual([])
  expect(dropWhile(lt(3), [1, 2, 3])).toEqual([3])
})
