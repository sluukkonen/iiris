import { curry2 } from './curry2'
import { flatMapU } from './internal/flatMapU'
import { setName } from './internal/setName'

export const flatMap = setName(curry2(flatMapU), 'flatMap')
