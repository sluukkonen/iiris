import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { reduceU } from './internal/index.js'

export const reduce = setName(curry3(reduceU), 'reduce')
