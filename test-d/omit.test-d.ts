import * as S from '..'
import { User, user } from './index.test-d'
import { expectType } from 'tsd'

expectType<User>(S.omit([], user))

expectType<Omit<User, 'age'>>(S.omit(['age'], user))
expectType<Omit<User, 'age'>>(S.omit(['age'])(user))

expectType<Omit<User, 'name'>>(S.omit(['name'], user))
expectType<Omit<User, 'name'>>(S.omit(['name'])(user))

expectType<Omit<User, 'name' | 'age'>>(S.omit(['age', 'name'], user))
expectType<Omit<User, 'name' | 'age'>>(S.omit(['age', 'name'])(user))
