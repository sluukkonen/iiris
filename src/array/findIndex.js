import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { findIndexU } from './internal/findIndexU.js'

export const findIndex = setName(curry2(findIndexU), 'findIndex')
