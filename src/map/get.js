import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

export const getU = (key, map) => map.get(key)

export const get = setName(curry2(getU), 'get')
