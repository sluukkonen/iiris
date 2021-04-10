import { expectError, expectType } from 'tsd'
import * as I from '..'
import { user } from './index.test-d'

const startsWithA = I.test(/^a/)

// Normal value
expectType<boolean>(I.propSatisfies('name', startsWithA, user))
expectType<boolean>(I.propSatisfies('name', startsWithA)(user))
expectType<boolean>(I.propSatisfies('name')(startsWithA, user))
expectType<boolean>(I.propSatisfies('name')(startsWithA)(user))

// Nullable value
expectType<boolean>(I.propSatisfies('age', I.maybe(false, I.gt(0)), user))
expectType<boolean>(I.propSatisfies('age', I.gt(0))(user))
expectType<boolean>(I.propSatisfies('age')(I.maybe(false, I.gt(0)), user))
expectType<boolean>(I.propSatisfies('age')(I.gt(0))(user))

// Wrong type
expectError(I.propSatisfies('age', startsWithA, user))
expectError(I.propSatisfies('age', startsWithA)(user))
expectError(I.propSatisfies('age')(startsWithA, user))
expectError(I.propSatisfies('age')(startsWithA)(user))
