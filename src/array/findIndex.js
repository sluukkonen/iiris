import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { findIndexU } from './internal/findIndexU.js'

export const findIndex = setName(curry2(findIndexU), 'findIndex')
