import { curry3 } from './curry3'
import { maxByU } from './internal/maxByU'
import { setName } from './internal/setName'

export const maxBy = setName(curry3(maxByU), 'maxBy')
