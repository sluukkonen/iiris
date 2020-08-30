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

// Default value is different type

// Name is not optional, so default value is never chosen.
expectType<string>(S.getOr(true, 'name', user))
expectType<string>(S.getOr(true, 'name')(user))
expectType<string>(S.getOr(true)('name', user))
expectType<string>(S.getOr(true)('name')(user))

// Age is not optional, so default value is chosen if it is missing.
expectType<number | boolean>(S.getOr(true, 'age', user))
expectType<number | boolean>(S.getOr(true, 'age')(user))
expectType<number | boolean>(S.getOr(true)('age', user))
expectType<number | boolean>(S.getOr(true)('age')(user))

// Object may be missing, so we may hit the default value in this case.
expectType<string | boolean>(S.getOr(true, 'name', maybeUser))
expectType<string | boolean>(S.getOr(true, 'name')(maybeUser))
expectType<string | boolean>(S.getOr(true)('name', maybeUser))
expectType<string | boolean>(S.getOr(true)('name')(maybeUser))

// Ditto.
expectType<number | boolean>(S.getOr(true, 'age', maybeUser))
expectType<number | boolean>(S.getOr(true, 'age')(maybeUser))
expectType<number | boolean>(S.getOr(true)('age', maybeUser))
expectType<number | boolean>(S.getOr(true)('age')(maybeUser))

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

// Default value is different type

expectType<User | true>(S.getOr(true, 0, users))
expectType<User | boolean>(S.getOr(true, 0)(users))
expectType<User | boolean>(S.getOr(true)(0, users))
expectType<User | boolean>(S.getOr(true)(0)(users))
