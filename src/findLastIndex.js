import { curry2 } from './internal/curry2'
import { findLastIndexU } from './internal/findLastIndexU'
import { setName } from './internal/setName'

export const findLastIndex = setName(curry2(findLastIndexU), 'findLastIndex')
