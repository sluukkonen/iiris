import { curry2 } from '../function/curry2.js'
import { setName } from '../core/internal/setName.js'
import { addU } from './internal/addU.js'

export const add = setName(curry2(addU), 'add')
