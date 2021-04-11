import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, user, users } from './index.test-d'

// Normal array
expectType<User>(A.nthOr(user, 0, users))
expectType<User>(A.nthOr(user, 0)(users))
expectType<User>(A.nthOr(user)(0, users))
expectType<User>(A.nthOr(user)(0)(users))

// Nullable array
expectError(A.nthOr(user, 0, maybeUsers))
expectError(A.nthOr(user, 0)(maybeUsers))
expectError(A.nthOr(user)(0, maybeUsers))
expectError(A.nthOr(user)(0)(maybeUsers))

// Default value is wrong type
expectError(A.nthOr(true, 0, users))
expectError(A.nthOr(true, 0)(users))
expectError(A.nthOr(true)(0, users))
expectError(A.nthOr(true)(0)(users))
