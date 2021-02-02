import { curry3 } from './curry3'
import { setName } from './internal/setName'
import { setPropU } from './internal/setPropU'

export const setProp = setName(curry3(setPropU), 'setProp')
