import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { isUndefined } from '../isUndefined.js'

export const setU = (key, value, object) => {
  if (isUndefined(value)) {
    // eslint-disable-next-line no-unused-vars
    const { [key]: ignore, ...rest } = object
    return rest
  } else {
    return { ...object, [key]: value }
  }
}

export const set = setName(curry3(setU), 'set')
