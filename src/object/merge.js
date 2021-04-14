import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'

const mergeU = (object, other) => ({ ...object, ...other })

export const merge = setName(curry2(mergeU), 'merge')
