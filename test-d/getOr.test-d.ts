import * as S from '..'
import { User, user, maybeUser, users, maybeUsers } from './index.test-d'
import { expectError, expectType } from 'tsd'

/// Objects

// Normal field
expectType<string>(S.getOr('', 'name', user))
expectType<string>(S.getOr('', 'name')(user))
expectType<string>(S.getOr('')('name', user))
expectType<string>(S.getOr('')('name')(user))

// Optional field
expectType<number>(S.getOr(0, 'age', user))
expectType<number>(S.getOr(0, 'age')(user))
expectType<number>(S.getOr(0)('age', user))
expectType<number>(S.getOr(0)('age')(user))

// Nullable object
expectType<string>(S.getOr('', 'name', maybeUser))
expectType<string>(S.getOr('', 'name')(maybeUser))
expectType<string>(S.getOr('')('name', maybeUser))
expectType<string>(S.getOr('')('name')(maybeUser))

expectType<number>(S.getOr(0, 'age', maybeUser))
expectType<number>(S.getOr(0, 'age')(maybeUser))
expectType<number>(S.getOr(0)('age', maybeUser))
expectType<number>(S.getOr(0)('age')(maybeUser))

// Invalid default value

expectError(S.getOr(true, 'name', user))
expectError(S.getOr(true, 'name')(user))
expectError(S.getOr(true)('name', user))
expectError(S.getOr(true)('name')(user))

expectError(S.getOr(true, 'age', user))
expectError(S.getOr(true, 'age')(user))
expectError(S.getOr(true)('age', user))
expectError(S.getOr(true)('age')(user))

expectError(S.getOr(true, 'name', maybeUser))
expectError(S.getOr(true, 'name')(maybeUser))
expectError(S.getOr(true)('name', maybeUser))
expectError(S.getOr(true)('name')(maybeUser))

expectError(S.getOr(true, 'age', maybeUser))
expectError(S.getOr(true, 'age')(maybeUser))
expectError(S.getOr(true)('age', maybeUser))
expectError(S.getOr(true)('age')(maybeUser))

/// Arrays

// Normal array
expectType<User>(S.getOr(user, 0, users))
expectType<User>(S.getOr(user, 0)(users))
expectType<User>(S.getOr(user)(0, users))
expectType<User>(S.getOr(user)(0)(users))

// Optional array
expectType<User>(S.getOr(user, 0, maybeUsers))
expectType<User>(S.getOr(user, 0)(maybeUsers))
expectType<User>(S.getOr(user)(0, maybeUsers))
expectType<User>(S.getOr(user)(0)(maybeUsers))

// Null value
expectType<User>(S.getOr(user, 0, null))
expectType<User>(S.getOr(user, 0)(null))
expectType<User>(S.getOr(user)(0, null))
expectType<User>(S.getOr(user)(0)(null))

// Invalid default value

expectError(S.getOr(true, 0, users))
expectError(S.getOr(true, 0)(users))
expectError(S.getOr(true)(0, users))
expectError(S.getOr(true)(0)(users))
