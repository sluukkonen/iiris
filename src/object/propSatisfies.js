import { setName } from '../core/internal/index.js'
import { curry3 } from '../function/index.js'
import { propSatisfiesU } from './internal/index.js'

export const propSatisfies = setName(curry3(propSatisfiesU), 'propSatisfies')
