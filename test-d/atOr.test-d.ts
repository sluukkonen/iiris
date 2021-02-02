import * as S from '..'
import { User, user, users, maybeUsers } from './index.test-d'
import { expectError, expectType } from 'tsd'

// Normal array
expectType<User>(S.atOr(user, 0, users))
expectType<User>(S.atOr(user, 0)(users))
expectType<User>(S.atOr(user)(0, users))
expectType<User>(S.atOr(user)(0)(users))

// Optional array
expectType<User>(S.atOr(user, 0, maybeUsers))
expectType<User>(S.atOr(user, 0)(maybeUsers))
expectType<User>(S.atOr(user)(0, maybeUsers))
expectType<User>(S.atOr(user)(0)(maybeUsers))

// Null value
expectType<User>(S.atOr(user, 0, null))
expectType<User>(S.atOr(user, 0)(null))
expectType<User>(S.atOr(user)(0, null))
expectType<User>(S.atOr(user)(0)(null))

// Default value is wrong type

expectError(S.atOr(true, 0, users))
expectError(S.atOr(true, 0)(users))
expectError(S.atOr(true)(0, users))
expectError(S.atOr(true)(0)(users))
