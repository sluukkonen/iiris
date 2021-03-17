import { curry2 } from './curry2'
import { gtU } from './internal/gtU'
import { setName } from './internal/setName'

export const gt = setName(curry2(gtU), 'gt')
