import { hasOwn } from '../../core/internal/index.js'

export const propSatisfiesU = (key, fn, object) =>
  hasOwn(object, key) && fn(object[key])
