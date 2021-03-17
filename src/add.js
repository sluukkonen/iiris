import { curry2 } from './curry2'
import { addU } from './internal/addU'
import { setName } from './internal/setName'

export const add = setName(curry2(addU), 'add')
