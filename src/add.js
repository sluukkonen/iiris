import { curry2 } from './curry2.js'
import { setName } from './internal/setName.js'

export const addU = (a, b) => b + a

export const add = setName(curry2(addU), 'add')
