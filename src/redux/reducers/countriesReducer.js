export default function countriesReducer(state = [], action) {
  switch (action.type) {
    case 'LIST_COUNTRIES_SUCCESS':
      return action.countries;
    default:
      return state;
  }
}
