import * as S from '..'
import { user, maybeUser } from './index.test-d'
import { expectError, expectType } from 'tsd'

// Normal field
expectType<string>(S.propOr('', 'name', user))
expectType<string>(S.propOr('', 'name')(user))
expectType<string>(S.propOr('')('name', user))
expectType<string>(S.propOr('')('name')(user))

// Optional field
expectType<number>(S.propOr(0, 'age', user))
expectType<number>(S.propOr(0, 'age')(user))
expectType<number>(S.propOr(0)('age', user))
expectType<number>(S.propOr(0)('age')(user))

// Nullable object
expectType<string>(S.propOr('', 'name', maybeUser))
expectType<string>(S.propOr('', 'name')(maybeUser))
expectType<string>(S.propOr('')('name', maybeUser))
expectType<string>(S.propOr('')('name')(maybeUser))

expectType<number>(S.propOr(0, 'age', maybeUser))
expectType<number>(S.propOr(0, 'age')(maybeUser))
expectType<number>(S.propOr(0)('age', maybeUser))
expectType<number>(S.propOr(0)('age')(maybeUser))

// Default value is of wrong type

expectError(S.propOr(true, 'name', user))
expectError(S.propOr(true, 'name')(user))
expectError(S.propOr(true)('name', user))
expectError(S.propOr(true)('name')(user))

// Age is not optional, so default value is chosen if it is missing.
expectError(S.propOr(true, 'age', user))
expectError(S.propOr(true, 'age')(user))
expectError(S.propOr(true)('age', user))
expectError(S.propOr(true)('age')(user))
