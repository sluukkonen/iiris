import { expectError, expectType } from 'tsd'
import * as A from '../array'
import { maybeUsers, User, user, users } from './index.test-d'

// Normal array
expectType<User>(A.atOr(user, 0, users))
expectType<User>(A.atOr(user, 0)(users))
expectType<User>(A.atOr(user)(0, users))
expectType<User>(A.atOr(user)(0)(users))

// Nullable array
expectError(A.atOr(user, 0, maybeUsers))
expectError(A.atOr(user, 0)(maybeUsers))
expectError(A.atOr(user)(0, maybeUsers))
expectError(A.atOr(user)(0)(maybeUsers))

// Default value is wrong type
expectError(A.atOr(true, 0, users))
expectError(A.atOr(true, 0)(users))
expectError(A.atOr(true)(0, users))
expectError(A.atOr(true)(0)(users))
