import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUser, User, user, users } from './index.test-d'

expectType<User[]>(A.setNth(0, user, users))
expectType<User[]>(A.setNth(0, user)(users))
expectType<User[]>(A.setNth(0)(user, users))
expectType<User[]>(A.setNth(0)(user)(users))

// Optional new value
expectType<User[]>(A.setNth(0, maybeUser, users))
expectType<User[]>(A.setNth(0, maybeUser)(users))
expectType<User[]>(A.setNth(0)(maybeUser, users))
expectType<User[]>(A.setNth(0)(maybeUser)(users))

// Wrong type
expectError(A.setNth(0, true, users))
expectError(A.setNth(0, true)(users))
expectError(A.setNth(0)(true, users))
expectError(A.setNth(0)(true)(users))
