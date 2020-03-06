export default function newsReducer(state = [], action) {
  switch (action.type) {
    case 'LIST_NEWS_SUCCESS':
      return action.news;
    default:
      return state;
  }
}
