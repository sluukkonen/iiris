import { minU } from '../../internal/minU.js'

export const zipObjectU = (keys, values) => {
  const result = {}
  const length = minU(keys.length, values.length)

  for (let i = 0; i < length; i++) {
    result[keys[i]] = values[i]
  }

  return result
}
