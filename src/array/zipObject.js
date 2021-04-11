import { setName } from '../core/internal/index.js'
import { curry2 } from '../function/index.js'
import { zipObjectU } from './internal/index.js'

export const zipObject = setName(curry2(zipObjectU), 'zipObject')
