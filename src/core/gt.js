import { curry2 } from '../function/index.js'
import { gtU, setName } from './internal/index.js'

export const gt = setName(curry2(gtU), 'gt')
