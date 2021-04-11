import { expectError, expectType } from 'tsd'
import * as O from '../object'
import { User, user } from './index.test-d'

// Normal field
expectType<User>(O.setProp('name', '', user))
expectType<User>(O.setProp('name', '')(user))
expectType<User>(O.setProp('name')('', user))
expectType<User>(O.setProp('name')('')(user))

// Optional field
expectType<User>(O.setProp('age', 0, user))
expectType<User>(O.setProp('age', 0)(user))
expectType<User>(O.setProp('age')(0, user))
expectType<User>(O.setProp('age')(0)(user))

// Removing a normal field
expectError(O.setProp('name', undefined, user))
expectError(O.setProp('name', undefined)(user))
expectError(O.setProp('name')(undefined, user))
expectError(O.setProp('name')(undefined)(user))

// Removing an optional field
expectType<User>(O.setProp('age', undefined, user))
expectType<User>(O.setProp('age', undefined as number | undefined)(user))
expectType<User>(O.setProp('age')(undefined, user))
expectType<User>(O.setProp('age')(undefined as number | undefined)(user))

// Adding a new field
expectError(O.setProp('new', true, user))
// TODO: Uncomment when tsd supports "X has no properties common with Y"
// expectError(I.setProp('new', true)(user))
// expectError(I.setProp('new')(true, user))
// expectError(I.setProp('new')(true)(user))

// Changing the type of a field
expectError(O.setProp('age', 'too old', user))
expectError(O.setProp('age', 'too old')(user))
expectError(O.setProp('age')('too old', user))
expectError(O.setProp('age')('too old')(user))
