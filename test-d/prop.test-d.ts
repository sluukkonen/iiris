import { expectError, expectType } from 'tsd'
import * as I from '..'
import { maybeUser, user } from './index.test-d'

// Normal field
expectType<string>(I.prop('name', user))
expectType<string>(I.prop('name')(user))

// Optional field
expectType<number | undefined>(I.prop('age', user))
expectType<number | undefined>(I.prop('age')(user))

// Nullable object
expectError(I.prop('name', maybeUser))
expectError(I.prop('name')(maybeUser))

// Invalid field
expectError(I.prop('foo', user))
// expectError(I.prop('foo')(user))

expectError(I.prop('foo', maybeUser))
expectError(I.prop('foo')(maybeUser))
