import * as newsApi from '../../api/newsApi';

export function loadNewsSuccess(news, country) {
  return { type: 'LIST_NEWS_SUCCESS', news, country };
}

export function loadNews(country) {
  return dispatch => {
    return newsApi
      .getLatestNews(country)
      .then(news => {
        dispatch(loadNewsSuccess(news, country));
      })
      .catch(error => error);
  };
}
