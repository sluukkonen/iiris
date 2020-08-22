import { curry2 } from './internal/curry2'
import { findU } from './internal/findU'
import { setName } from './internal/setName'

export const find = setName(curry2(findU), 'find')
