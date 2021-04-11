import { expectType } from 'tsd'
import * as O from '../object'
import { User, user } from './index.test-d'

expectType<User>(O.omit([], user))

expectType<Omit<User, 'age'>>(O.omit(['age'], user))
expectType<Omit<User, 'age'>>(O.omit(['age'])(user))

expectType<Omit<User, 'name'>>(O.omit(['name'], user))
expectType<Omit<User, 'name'>>(O.omit(['name'])(user))

expectType<Omit<User, 'name' | 'age'>>(O.omit(['age', 'name'], user))
expectType<Omit<User, 'name' | 'age'>>(O.omit(['age', 'name'])(user))
