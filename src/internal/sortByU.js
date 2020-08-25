import { ascend } from '../ascend'
import { sortU } from './sortU'

export const sortByU = (fn, array) => sortU(ascend(fn), array)
