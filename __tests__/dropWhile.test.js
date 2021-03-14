import { dropWhile } from '../src/dropWhile'
import { lt } from '../src/lt'

it('drops elements matching a predicate from the begining of array', () => {
  expect(dropWhile(lt(3), [])).toEqual([])
  expect(dropWhile(lt(3), [1])).toEqual([])
  expect(dropWhile(lt(3), [1, 2])).toEqual([])
  expect(dropWhile(lt(3), [1, 2, 3])).toEqual([3])
})
