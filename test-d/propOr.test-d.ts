import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(I.propOr('', 'name', user))
expectType<string>(I.propOr('', 'name')(user))
expectType<string>(I.propOr('')('name', user))
expectType<string>(I.propOr('')('name')(user))

// Optional field
expectType<number>(I.propOr(0, 'age', user))
expectType<number>(I.propOr(0, 'age')(user))
expectType<number>(I.propOr(0)('age', user))
expectType<number>(I.propOr(0)('age')(user))

// Nullable object
expectError(I.propOr('', 'name', maybeUser))
expectError(I.propOr('', 'name')(maybeUser))
expectError(I.propOr('')('name', maybeUser))
expectError(I.propOr('')('name')(maybeUser))

// Default value is of wrong type
expectError(I.propOr(true, 'name', user))
expectError(I.propOr(true, 'name')(user))
expectError(I.propOr(true)('name', user))
expectError(I.propOr(true)('name')(user))

expectError(I.propOr(true, 'age', user))
expectError(I.propOr(true, 'age')(user))
expectError(I.propOr(true)('age', user))
expectError(I.propOr(true)('age')(user))
