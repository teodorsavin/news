import * as newsApi from '../../api/newsApi';

export function loadNewsSuccess(news) {
  return { type: 'LIST_NEWS_SUCCESS', news };
}

export function loadNews() {
  return dispatch => {
    return newsApi
      .getLatestNews()
      .then(news => {
        dispatch(loadNewsSuccess(news));
      })
      .catch(error => error);
  };
}
