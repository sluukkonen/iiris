import { curry3 } from './curry3'
import { sliceU } from './internal/sliceU'
import { setName } from './internal/setName'

export const slice = setName(curry3(sliceU), 'slice')
