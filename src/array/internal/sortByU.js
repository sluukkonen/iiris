import { ascend } from '../../ascend.js'
import { sortU } from './sortU.js'

export const sortByU = (fn, array) => sortU(ascend(fn), array)
