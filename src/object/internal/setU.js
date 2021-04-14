import { isUndefined } from '../../core/isUndefined.js'

export const setU = (key, value, object) => {
  if (isUndefined(value)) {
    // eslint-disable-next-line no-unused-vars
    const { [key]: ignore, ...rest } = object
    return rest
  } else {
    return { ...object, [key]: value }
  }
}
