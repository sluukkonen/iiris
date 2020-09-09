import * as S from '..'
import { User, user } from './index.test-d'
import { expectType } from 'tsd'

expectType<User>(S.omit([], user))

expectType<{ name: string }>(S.omit(['age'], user))
expectType<{ name: string }>(S.omit(['age'])(user))

expectType<{ age?: number }>(S.omit(['name'], user))
expectType<{ age?: number }>(S.omit(['name'])(user))

expectType<{}>(S.omit(['age', 'name'], user))
expectType<{}>(S.omit(['age', 'name'])(user))
