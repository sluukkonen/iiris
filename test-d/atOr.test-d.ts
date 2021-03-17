import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUsers, User, user, users } from './index.test-d'

// Normal array
expectType<User>(I.atOr(user, 0, users))
expectType<User>(I.atOr(user, 0)(users))
expectType<User>(I.atOr(user)(0, users))
expectType<User>(I.atOr(user)(0)(users))

// Optional array
expectType<User>(I.atOr(user, 0, maybeUsers))
expectType<User>(I.atOr(user, 0)(maybeUsers))
expectType<User>(I.atOr(user)(0, maybeUsers))
expectType<User>(I.atOr(user)(0)(maybeUsers))

// Null value
expectType<User>(I.atOr(user, 0, null))
expectType<User>(I.atOr(user, 0)(null))
expectType<User>(I.atOr(user)(0, null))
expectType<User>(I.atOr(user)(0)(null))

// Default value is wrong type

expectError(I.atOr(true, 0, users))
expectError(I.atOr(true, 0)(users))
expectError(I.atOr(true)(0, users))
expectError(I.atOr(true)(0)(users))
