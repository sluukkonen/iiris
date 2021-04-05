import { expectType } from 'tsd'
import * as I from '..'
import { user } from './index.test-d'

const startsWithA = I.test(/^a/)

// Normal value
expectType<boolean>(I.propSatisfies(startsWithA, 'name', user))
expectType<boolean>(I.propSatisfies(startsWithA, 'name')(user))
expectType<boolean>(I.propSatisfies(startsWithA)('name', user))
expectType<boolean>(I.propSatisfies(startsWithA)('name')(user))

// Nullable value
expectType<boolean>(I.propSatisfies(I.gt(0), 'age', user))
expectType<boolean>(I.propSatisfies(I.gt(0), 'age')(user))
expectType<boolean>(I.propSatisfies(I.gt(0))('age', user))
expectType<boolean>(I.propSatisfies(I.gt(0))('age')(user))
