import { toUpperCase } from './toUpperCase'
import { toLowerCase } from './toLowerCase'

export const capitalize = (string) => {
  const lowerCased = toLowerCase(string)
  for (const codePoint of lowerCased) {
    return toUpperCase(codePoint) + lowerCased.slice(codePoint.length)
  }
  return ''
}
