import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { getU } from './get.js'
import { hasU } from './has.js'

const getOrU = (defaultValue, key, map) =>
  hasU(key, map) ? getU(key, map) : defaultValue

export const getOr = setName(curry3(getOrU), 'getOr')
