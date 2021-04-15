import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'
import { copyMap } from './internal/copyMap.js'

export const setU = (key, value, map) => copyMap(map).set(key, value)

export const set = setName(curry3(setU), 'set')
