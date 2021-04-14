import { hasOwn } from '../core/internal/hasOwn.js'
import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'

export const has = setName(curry2(hasOwn), 'has')
