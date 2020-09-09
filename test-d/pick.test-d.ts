import * as S from '..'
import { User, user } from './index.test-d'
import { expectType } from 'tsd'

expectType<{}>(S.pick([], user))

expectType<{ age?: number }>(S.pick(['age'], user))
expectType<{ age?: number }>(S.pick(['age'])(user))

expectType<{ name: string }>(S.pick(['name'], user))
expectType<{ name: string }>(S.pick(['name'])(user))

expectType<User>(S.pick(['age', 'name'], user))
expectType<User>(S.pick(['age', 'name'])(user))
