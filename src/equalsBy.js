import { curry3 } from './internal/curry3'
import { equalsByU } from './internal/equalsByU'
import { setName } from './internal/setName'

export const equalsBy = setName(curry3(equalsByU), 'equalsBy')
