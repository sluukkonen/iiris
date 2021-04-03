import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

// Normal field
expectType<User>(I.setProp('name', '', user))
expectType<User>(I.setProp('name', '')(user))
expectType<User>(I.setProp('name')('', user))
expectType<User>(I.setProp('name')('')(user))

// Optional field
expectType<User>(I.setProp('age', 0, user))
expectType<User>(I.setProp('age', 0)(user))
expectType<User>(I.setProp('age')(0, user))
expectType<User>(I.setProp('age')(0)(user))

// Removing a normal field
expectError(I.setProp('name', undefined, user))
expectError(I.setProp('name', undefined)(user))
expectError(I.setProp('name')(undefined, user))
expectError(I.setProp('name')(undefined)(user))

// Removing an optional field
expectType<User>(I.setProp('age', undefined, user))
expectType<User>(I.setProp('age', undefined as number | undefined)(user))
expectType<User>(I.setProp('age')(undefined, user))
expectType<User>(I.setProp('age')(undefined as number | undefined)(user))

// Adding a new field
expectError(I.setProp('new', true, user))
// TODO: Uncomment when tsd supports "X has no properties common with Y"
// expectError(I.setProp('new', true)(user))
// expectError(I.setProp('new')(true, user))
// expectError(I.setProp('new')(true)(user))

// Changing the type of a field
expectError(I.setProp('age', 'too old', user))
expectError(I.setProp('age', 'too old')(user))
expectError(I.setProp('age')('too old', user))
expectError(I.setProp('age')('too old')(user))
