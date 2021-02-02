import * as S from '..'
import { User, user } from './index.test-d'
import { expectType } from 'tsd'

expectType<{}>(S.pick([], user))

expectType<Pick<User, 'age'>>(S.pick(['age'], user))
expectType<Pick<User, 'age'>>(S.pick(['age'])(user))

expectType<Pick<User, 'name'>>(S.pick(['name'], user))
expectType<Pick<User, 'name'>>(S.pick(['name'])(user))

expectType<Pick<User, 'age' | 'name'>>(S.pick(['age', 'name'], user))
expectType<Pick<User, 'age' | 'name'>>(S.pick(['age', 'name'])(user))
