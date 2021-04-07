import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, user, users } from './index.test-d'

// Normal array
expectType<User>(I.nthOr(user, 0, users))
expectType<User>(I.nthOr(user, 0)(users))
expectType<User>(I.nthOr(user)(0, users))
expectType<User>(I.nthOr(user)(0)(users))

// Nullable array
expectError(I.nthOr(user, 0, maybeUsers))
expectError(I.nthOr(user, 0)(maybeUsers))
expectError(I.nthOr(user)(0, maybeUsers))
expectError(I.nthOr(user)(0)(maybeUsers))

// Default value is wrong type
expectError(I.nthOr(true, 0, users))
expectError(I.nthOr(true, 0)(users))
expectError(I.nthOr(true)(0, users))
expectError(I.nthOr(true)(0)(users))
