import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { zipObjectU } from './internal/zipObject'

export const zipObject = setName(curry2(zipObjectU), 'zipObject')
