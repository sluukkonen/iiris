import { expectError, expectType } from 'tsd'
import * as I from '..'
import * as O from '../object'
import * as S from '../string'
import { user } from './index.test-d'

const startsWithA = S.test(/^a/)

// Normal value
expectType<boolean>(O.propSatisfies('name', startsWithA, user))
expectType<boolean>(O.propSatisfies('name', startsWithA)(user))
expectType<boolean>(O.propSatisfies('name')(startsWithA, user))
expectType<boolean>(O.propSatisfies('name')(startsWithA)(user))

// Nullable value
expectType<boolean>(O.propSatisfies('age', I.maybe(false, I.gt(0)), user))
expectType<boolean>(O.propSatisfies('age', I.gt(0))(user))
expectType<boolean>(O.propSatisfies('age')(I.maybe(false, I.gt(0)), user))
expectType<boolean>(O.propSatisfies('age')(I.gt(0))(user))

// Wrong type
expectError(O.propSatisfies('age', startsWithA, user))
expectError(O.propSatisfies('age', startsWithA)(user))
expectError(O.propSatisfies('age')(startsWithA, user))
expectError(O.propSatisfies('age')(startsWithA)(user))
