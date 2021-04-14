import { setName } from '../internal/setName.js'
import { curry2 } from '../curry2.js'
import { flatMapU } from './internal/flatMapU.js'

export const flatMap = setName(curry2(flatMapU), 'flatMap')
