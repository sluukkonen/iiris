import { curry2 } from './internal/curry2'
import { setName } from './internal/setName'
import { sortU } from './internal/sortU'

export const sort = setName(curry2(sortU), 'sort')
