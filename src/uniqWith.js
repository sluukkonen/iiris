import { curry2 } from './curry2'
import { setName } from './internal/setName'
import { uniqWithU } from './internal/uniqWithU'

export const uniqWith = setName(curry2(uniqWithU), 'uniqWith')
