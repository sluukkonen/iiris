import { pickOmitBy } from './pickOmitBy'

export const pickByU = (predicate, object) =>
  pickOmitBy(predicate, object, true)
