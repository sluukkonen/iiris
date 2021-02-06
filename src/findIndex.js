import { curry2 } from './curry2'
import { findIndexU } from './internal/findIndexU'
import { setName } from './internal/setName'

export const findIndex = setName(curry2(findIndexU), 'findIndex')
