import { expectError, expectType } from 'tsd'
import * as S from '..'
import { maybeUser, maybeUsers, User, user, users } from './index.test-d'

/// Objects

expectType<Omit<User, 'name'>>(S.remove('name', user))
expectType<Omit<User, 'name'>>(S.remove('name')(user))
expectType<Omit<User, 'age'>>(S.remove('age', user))
expectType<Omit<User, 'age'>>(S.remove('age')(user))

// Invalid key
expectError(S.remove('foo', maybeUser))
expectError(S.remove('foo')(maybeUser))

// Nullable object
expectError(S.remove('age', maybeUser))
expectError(S.remove('age')(maybeUser))

// Arrays
expectType<User[]>(S.remove(0, users))
expectType<User[]>(S.remove(0)(users))

// Nullable array
expectError(S.remove(0, maybeUsers))
expectError(S.remove(0)(maybeUsers))
