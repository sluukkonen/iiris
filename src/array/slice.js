import { setName } from '../internal/setName.js'
import { curry3 } from '../curry3.js'
import { sliceU } from './internal/sliceU.js'

export const slice = setName(curry3(sliceU), 'slice')
