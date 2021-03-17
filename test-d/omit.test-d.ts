import { expectType } from 'tsd'
import * as I from '..'
import { User, user } from './index.test-d'

expectType<User>(I.omit([], user))

expectType<Omit<User, 'age'>>(I.omit(['age'], user))
expectType<Omit<User, 'age'>>(I.omit(['age'])(user))

expectType<Omit<User, 'name'>>(I.omit(['name'], user))
expectType<Omit<User, 'name'>>(I.omit(['name'])(user))

expectType<Omit<User, 'name' | 'age'>>(I.omit(['age', 'name'], user))
expectType<Omit<User, 'name' | 'age'>>(I.omit(['age', 'name'])(user))
