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
expectType<string | undefined>(I.prop('name', maybeUser))
expectType<string | undefined>(I.prop('name')(maybeUser))

expectType<number | undefined>(I.prop('age', maybeUser))
expectType<number | undefined>(I.prop('age')(maybeUser))

// Null object
expectType<undefined>(I.prop('name', null))
expectType<undefined>(I.prop('name')(null))

expectType<undefined>(I.prop('age', null))
expectType<undefined>(I.prop('age')(null))

// Invalid field
expectError(I.prop('foo', user))
// expectError(I.prop('foo')(user))

expectError(I.prop('foo', maybeUser))
expectError(I.prop('foo')(maybeUser))
