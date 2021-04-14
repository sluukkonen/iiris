import { curry3 } from '../curry3.js'
import { setName } from '../internal/setName.js'

export const sliceU = (start, end, array) => array.slice(start, end)

export const slice = setName(curry3(sliceU), 'slice')
