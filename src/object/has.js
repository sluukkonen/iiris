import { curry2 } from '../curry2.js'
import { builtinHasOwnProperty } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'

export const hasU = (key, object) => builtinHasOwnProperty.call(object, key)

export const has = setName(curry2(hasU), 'has')
