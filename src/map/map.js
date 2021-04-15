import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { empty } from './empty.js'

const mapU = (fn, map) => {
  const result = empty()

  for (const [key, value] of map) {
    result.set(key, fn(value))
  }

  return result
}

export const map = setName(curry2(mapU), 'map')
