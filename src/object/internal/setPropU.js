import { isUndefined } from '../../core/index.js'

export const setPropU = (key, value, object) => {
  if (isUndefined(value)) {
    // eslint-disable-next-line no-unused-vars
    const { [key]: ignore, ...rest } = object
    return rest
  } else {
    return { ...object, [key]: value }
  }
}
