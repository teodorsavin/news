export default function newsReducer(state = [], action) {
  switch (action.type) {
    case 'LIST_NEWS_SUCCESS':
      return { news: action.news, country: action.country };
    default:
      return state;
  }
}
