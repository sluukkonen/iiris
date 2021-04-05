import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { atEqualsU } from './internal/atEqualsU'

export const atEquals = setName(curry3(atEqualsU), 'atEquals')
