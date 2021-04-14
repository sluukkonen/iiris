import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { isDefined } from '../isDefined.js'

const mapMaybeU = (fn, array) => {
  const result = []

  for (const value of array) {
    const maybeValue = fn(value)
    if (isDefined(maybeValue)) {
      result.push(maybeValue)
    }
  }

  return result
}

export const mapMaybe = setName(curry2(mapMaybeU), 'mapMaybe')
