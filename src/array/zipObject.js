import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { zipObjectU } from './internal/zipObjectU.js'

export const zipObject = setName(curry2(zipObjectU), 'zipObject')
