import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUser, User, user, users } from './index.test-d'

expectType<User[]>(A.set(0, user, users))
expectType<User[]>(A.set(0, user)(users))
expectType<User[]>(A.set(0)(user, users))
expectType<User[]>(A.set(0)(user)(users))

// Undefined new value
expectType<Array<User | undefined>>(A.set(0, undefined, users))
expectError(A.set(0, undefined)(users))
expectType<Array<User | undefined>>(A.set(0)(undefined, users))
expectError(A.set(0)(undefined)(users))

// Optional new value
expectType<Array<User | undefined>>(A.set(0, maybeUser, users))
expectType<Array<User | undefined>>(A.set(0, maybeUser)(users))
expectType<Array<User | undefined>>(A.set(0)(maybeUser, users))
expectType<Array<User | undefined>>(A.set(0)(maybeUser)(users))

// Wrong type
expectError(A.set(0, true, users))
expectError(A.set(0, true)(users))
expectError(A.set(0)(true, users))
expectError(A.set(0)(true)(users))
