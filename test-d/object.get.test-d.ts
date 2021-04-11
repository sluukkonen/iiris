import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(O.get('name', user))
expectType<string>(O.get('name')(user))

// Optional field
expectType<number | undefined>(O.get('age', user))
expectType<number | undefined>(O.get('age')(user))

// Nullable object
expectError(O.get('name', maybeUser))
expectError(O.get('name')(maybeUser))

// Invalid field
expectError(O.get('foo', user))
// expectError(I.prop('foo')(user))

expectError(O.get('foo', maybeUser))
expectError(O.get('foo')(maybeUser))
