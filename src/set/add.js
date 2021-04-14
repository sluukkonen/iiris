import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { hasU } from './has.js'
import { copySet } from './internal/copySet.js'

const addU = (value, set) => (hasU(value, set) ? set : copySet(set).add(value))

export const add = setName(curry2(addU), 'add')
