import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { reduceU } from './internal/reduceU.js'

export const reduce = setName(curry3(reduceU), 'reduce')
