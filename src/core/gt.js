import { curry2 } from '../function/curry2.js'
import { gtU } from './internal/gtU.js'
import { setName } from './internal/setName.js'

export const gt = setName(curry2(gtU), 'gt')
