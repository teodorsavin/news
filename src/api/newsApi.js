import { handleResponse, handleError, jsonToQueryString } from './apiUtils';

export function getLatestNews() {
  const queryString = { country: 'nl', apiKey: process.env.REACT_APP_API_KEY };
  const url =
    process.env.REACT_APP_API_URL +
    'top-headlines' +
    jsonToQueryString(queryString);
  const requestUrl = new Request(url);

  return fetch(requestUrl)
    .then(handleResponse)
    .catch(handleError);
}
