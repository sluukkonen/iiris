import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(O.propOr('', 'name', user))
expectType<string>(O.propOr('', 'name')(user))
expectType<string>(O.propOr('')('name', user))
expectType<string>(O.propOr('')('name')(user))

// Optional field
expectType<number>(O.propOr(0, 'age', user))
expectType<number>(O.propOr(0, 'age')(user))
expectType<number>(O.propOr(0)('age', user))
expectType<number>(O.propOr(0)('age')(user))

// Nullable object
expectError(O.propOr('', 'name', maybeUser))
expectError(O.propOr('', 'name')(maybeUser))
expectError(O.propOr('')('name', maybeUser))
expectError(O.propOr('')('name')(maybeUser))

// Default value is of wrong type
expectError(O.propOr(true, 'name', user))
expectError(O.propOr(true, 'name')(user))
expectError(O.propOr(true)('name', user))
expectError(O.propOr(true)('name')(user))

expectError(O.propOr(true, 'age', user))
expectError(O.propOr(true, 'age')(user))
expectError(O.propOr(true)('age', user))
expectError(O.propOr(true)('age')(user))
