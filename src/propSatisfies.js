import { setName } from './internal/setName'
import { curry3 } from './curry3'
import { propSatisfiesU } from './internal/propSatisfiesU'

export const propSatisfies = setName(curry3(propSatisfiesU), 'propSatisfies')
