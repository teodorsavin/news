import { handleResponse, handleError, jsonToQueryString } from './apiUtils';

export function getLatestNews(country) {
  const queryString = {
    country: country,
    apiKey: process.env.REACT_APP_API_KEY
  };
  const url =
    process.env.REACT_APP_API_URL +
    'top-headlines' +
    jsonToQueryString(queryString);
  const requestUrl = new Request(url);

  return fetch(requestUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function getAllCountries() {
  const url = process.env.REACT_APP_COUNTRIES_API_URL;
  const requestUrl = new Request(url);

  return fetch(requestUrl)
    .then(handleResponse)
    .catch(handleError);
}
