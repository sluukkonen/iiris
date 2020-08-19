import { setName } from './internal/setName'
import { curry3 } from './internal/curry3'
import { reduceU } from './internal/reduceU'

export const reduce = setName(curry3(reduceU), 'reduce')
