import { expectError, expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

const toUpper = (s: string) => s.toUpperCase()

// Normal field
expectType<User>(I.modifyProp('name', (n) => n.toUpperCase(), user))
expectType<User>(I.modifyProp('name', toUpper)(user))
expectType<User>(I.modifyProp('name')((n) => n.toUpperCase(), user))
expectType<User>(I.modifyProp('name')(toUpper)(user))

// Optional field
expectType<User>(I.modifyProp('age', I.inc, user))
expectType<User>(I.modifyProp('age', I.inc)(user))
expectType<User>(I.modifyProp('age')(I.inc, user))
expectType<User>(I.modifyProp('age')(I.inc)(user))

// Removing a normal field
expectError(I.modifyProp('name', I.noop, user))
expectError(I.modifyProp('name', I.noop)(user))
expectError(I.modifyProp('name')(I.noop, user))
expectError(I.modifyProp('name')(I.noop)(user))

// Removing an optional field
expectType<User>(I.modifyProp('age', I.noop, user))
expectError(I.modifyProp('age', I.noop)(user)) // Not ideal, but can use removeProp instead
expectType<User>(I.modifyProp('age')(I.noop, user))
expectError(I.modifyProp('age')(I.noop)(user)) // Not ideal, but can use removeProp instead

// Identity function over mandatory field
expectType<User>(I.modifyProp('name', I.identity, user))
expectType<User>(I.modifyProp('name', I.identity)(user))
expectType<User>(I.modifyProp('name')(I.identity, user))
expectType<User>(I.modifyProp('name')(I.identity)(user))

// Identity function over optional field
expectType<User>(I.modifyProp('age', I.identity, user))
expectType<User>(I.modifyProp('age', I.identity)(user))
expectType<User>(I.modifyProp('age')(I.identity, user))
expectType<User>(I.modifyProp('age')(I.identity)(user))

// Adding a new field
expectError(I.modifyProp('new', I.constant(1), user))
// TODO: uncomment when tsd supports "X has no properties in common with Y"
// expectError(I.modifyProp('new', I.constant(1))(user))
// expectError(I.modifyProp('new')(I.constant(1), user))
// expectError(I.modifyProp('new')(I.constant(1))(user))

// Changing the type of a field
expectError(I.modifyProp('age', () => 'too old', user))
expectError(I.modifyProp('age', () => 'too old')(user))
expectError(I.modifyProp('age')(() => 'too old', user))
expectError(I.modifyProp('age')(() => 'too old')(user))

// Wrong type of function
expectError(I.modifyProp('age', I.toUpperCase, user))
expectError(I.modifyProp('age', I.toUpperCase)(user))
expectError(I.modifyProp('age')(I.toUpperCase)(user))
expectError(I.modifyProp('age')(I.toUpperCase)(user))
