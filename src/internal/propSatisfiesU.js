import { hasOwn } from './hasOwn'

export const propSatisfiesU = (fn, key, object) =>
  hasOwn(object, key) && fn(object[key])
