import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { removeU } from './internal/removeU.js'

export const remove = setName(curry2(removeU), 'remove')
