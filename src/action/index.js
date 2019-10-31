// {
//   type: 'ADD_ARTICLE',
//   payload: { title: 'React Redux Tutorial', id: 1 }
// }
import {
  PROVIDERS_FIRST, PROVIDERS, SERVICES_FIRST, SERVICES, OFFICES
} from '../constants/ActionTypes'

export function changeProviderF(payload) {
  return { type: PROVIDERS_FIRST, payload };
}
export function changeProvider(payload) {
  return { type: PROVIDERS, payload };
}
export function changeServicesF(payload) {
  return { type: SERVICES_FIRST, payload };
}
export function changeServices(payload) {
  return { type: SERVICES, payload };
}
export function changeOffices(payload) {
  return { type: OFFICES, payload };
}
