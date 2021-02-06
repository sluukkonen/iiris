import { setName } from './internal/setName'
import { curry2 } from './curry2'
import { gtU } from './internal/gtU'

export const gt = setName(curry2(gtU), 'gt')
