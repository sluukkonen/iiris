import * as S from '..'
import { user, maybeUser } from './index.test-d'
import { expectType, expectError } from 'tsd'

// Normal field
expectType<string>(S.prop('name', user))
expectType<string>(S.prop('name')(user))

// Optional field
expectType<number | undefined>(S.prop('age', user))
expectType<number | undefined>(S.prop('age')(user))

// Nullable object
expectType<string | undefined>(S.prop('name', maybeUser))
expectType<string | undefined>(S.prop('name')(maybeUser))

expectType<number | undefined>(S.prop('age', maybeUser))
expectType<number | undefined>(S.prop('age')(maybeUser))

// Null object
expectType<undefined>(S.prop('name', null))
expectType<undefined>(S.prop('name')(null))

expectType<undefined>(S.prop('age', null))
expectType<undefined>(S.prop('age')(null))

// Invalid field
expectError(S.prop('foo', user))
// expectError(S.prop('foo')(user))

expectError(S.prop('foo', maybeUser))
expectError(S.prop('foo')(maybeUser))
