import * as S from '..'
import { User, user, maybeUser, users, maybeUsers } from './index.test-d'
import { expectType, expectError } from 'tsd'

// Normal field
expectType<string>(S.get('name', user))
expectType<string>(S.get('name')(user))

// Optional field
expectType<number | undefined>(S.get('age', user))
expectType<number | undefined>(S.get('age')(user))

// Nullable object
expectType<string | undefined>(S.get('name', maybeUser))
expectType<string | undefined>(S.get('name')(maybeUser))

expectType<number | undefined>(S.get('age', maybeUser))
expectType<number | undefined>(S.get('age')(maybeUser))

// Null object
expectType<undefined>(S.get('name', null))
expectType<undefined>(S.get('name')(null))

expectType<undefined>(S.get('age', null))
expectType<undefined>(S.get('age')(null))

// Invalid field
expectError(S.get('foo', user))
// expectError(S.get('foo')(user))

expectError(S.get('foo', maybeUser))
expectError(S.get('foo')(maybeUser))

// Array
expectType<User | undefined>(S.get(0, users))
expectType<User | undefined>(S.get(0)(users))
