import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { minU } from '../min.js'

const zipObjectU = (keys, values) => {
  const result = {}
  const length = minU(keys.length, values.length)

  for (let i = 0; i < length; i++) {
    result[keys[i]] = values[i]
  }

  return result
}

export const zipObject = setName(curry2(zipObjectU), 'zipObject')
