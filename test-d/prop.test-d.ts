import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(O.prop('name', user))
expectType<string>(O.prop('name')(user))

// Optional field
expectType<number | undefined>(O.prop('age', user))
expectType<number | undefined>(O.prop('age')(user))

// Nullable object
expectError(O.prop('name', maybeUser))
expectError(O.prop('name')(maybeUser))

// Invalid field
expectError(O.prop('foo', user))
// expectError(I.prop('foo')(user))

expectError(O.prop('foo', maybeUser))
expectError(O.prop('foo')(maybeUser))
