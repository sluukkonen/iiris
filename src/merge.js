import { curry2 } from './curry2'
import { mergeU } from './internal/mergeU'
import { setName } from './internal/setName'

export const merge = setName(curry2(mergeU), 'merge')
