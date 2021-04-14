import { setName } from '../core/internal/setName.js'
import { curry2 } from '../function/curry2.js'
import { zipObjectU } from './internal/zipObjectU.js'

export const zipObject = setName(curry2(zipObjectU), 'zipObject')
