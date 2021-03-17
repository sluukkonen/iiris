import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { sliceU } from './internal/sliceU'

export const slice = setName(curry3(sliceU), 'slice')
