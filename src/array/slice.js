import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { sliceU } from './internal/index.js'

export const slice = setName(curry3(sliceU), 'slice')
