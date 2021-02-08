import { isUndefined } from '../isUndefined'

export const modifyPropU = (key, fn, object) => {
  const value = fn(object[key])

  if (isUndefined(value)) {
    // eslint-disable-next-line no-unused-vars
    const { [key]: ignore, ...rest } = object
    return rest
  } else {
    return { ...object, [key]: value }
  }
}
