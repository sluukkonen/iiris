import { curry2 } from './curry2'
import { lastIndexOfU } from './internal/lastIndexOfU'
import { setName } from './internal/setName'

export const lastIndexOf = setName(curry2(lastIndexOfU), 'lastIndexOf')
