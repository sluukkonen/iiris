import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(O.getOr('', 'name', user))
expectType<string>(O.getOr('', 'name')(user))
expectType<string>(O.getOr('')('name', user))
expectType<string>(O.getOr('')('name')(user))

// Optional field
expectType<number>(O.getOr(0, 'age', user))
expectType<number>(O.getOr(0, 'age')(user))
expectType<number>(O.getOr(0)('age', user))
expectType<number>(O.getOr(0)('age')(user))

// Nullable object
expectError(O.getOr('', 'name', maybeUser))
expectError(O.getOr('', 'name')(maybeUser))
expectError(O.getOr('')('name', maybeUser))
expectError(O.getOr('')('name')(maybeUser))

// Default value is of wrong type
expectError(O.getOr(true, 'name', user))
expectError(O.getOr(true, 'name')(user))
expectError(O.getOr(true)('name', user))
expectError(O.getOr(true)('name')(user))

expectError(O.getOr(true, 'age', user))
expectError(O.getOr(true, 'age')(user))
expectError(O.getOr(true)('age', user))
expectError(O.getOr(true)('age')(user))
