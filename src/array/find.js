import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { findU } from './internal/findU.js'

export const find = setName(curry2(findU), 'find')
