import { setName } from '../core/internal/setName.js'
import { curry3 } from '../function/curry3.js'
import { sliceU } from './internal/sliceU.js'

export const slice = setName(curry3(sliceU), 'slice')
