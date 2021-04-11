import { toLowerCase } from './toLowerCase.js'
import { toUpperCase } from './toUpperCase.js'

export const capitalize = (string) => {
  const lowerCased = toLowerCase(string)
  for (const codePoint of lowerCased) {
    return toUpperCase(codePoint) + lowerCased.slice(codePoint.length)
  }
  return ''
}
