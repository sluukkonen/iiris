import { addU } from './addU'
import { groupMapReduceU } from './groupMapReduceU'

export const countByU = (keyFn, array) =>
  groupMapReduceU(keyFn, one, addU, array)

const one = () => 1
