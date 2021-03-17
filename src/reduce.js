import { curry3 } from './curry3'
import { reduceU } from './internal/reduceU'
import { setName } from './internal/setName'

export const reduce = setName(curry3(reduceU), 'reduce')
