import { hasOwn } from './hasOwn'

export const propSatisfiesU = (key, fn, object) =>
  hasOwn(object, key) && fn(object[key])
