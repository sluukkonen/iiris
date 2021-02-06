import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { addU } from './internal/addU'

export const add = setName(curry2(addU), 'add')
