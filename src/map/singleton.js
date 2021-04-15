import { curry2 } from '../curry2.js'
import { builtinMap } from '../internal/builtins.js'
import { setName } from '../internal/setName.js'

const singletonU = (key, value) => new builtinMap([[key, value]])

export const singleton = setName(curry2(singletonU), 'singleton')
