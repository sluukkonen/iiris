import { curry2 } from '../curry2.js'
import { setName } from '../internal/setName.js'
import { setU } from './set.js'

const removeU = (index, array) => setU(index, undefined, array)

export const remove = setName(curry2(removeU), 'remove')
