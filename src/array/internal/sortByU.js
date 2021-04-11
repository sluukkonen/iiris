import { ascend } from '../../function/ascend.js'
import { sortU } from './sortU.js'

export const sortByU = (fn, array) => sortU(ascend(fn), array)
