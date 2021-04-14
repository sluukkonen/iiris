import { setName } from './internal/setName.js'
import { curry2 } from './curry2.js'
import { addU } from './internal/addU.js'

export const add = setName(curry2(addU), 'add')
