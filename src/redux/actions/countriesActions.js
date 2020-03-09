import * as newsApi from '../../api/newsApi';

export function loadCountriesSuccess(countries) {
  return { type: 'LIST_COUNTRIES_SUCCESS', countries };
}

export function loadCountries() {
  return dispatch => {
    return newsApi
      .getAllCountries()
      .then(countries => {
        dispatch(loadCountriesSuccess(countries));
      })
      .catch(error => error);
  };
}
