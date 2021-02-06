import { curry2 } from './curry2'
import { removeU } from './internal/removeU'
import { setName } from './internal/setName'

export const remove = setName(curry2(removeU), 'remove')
