import { REQUEST_BOOKS, RECEIVE_BOOKS, LOGGING_IN } from './actionTypes'

export const initalState = {
  username: 'admin',
  password: 'passw0rd',
  query: '',
  isFetching: false,
  data: {},
  error: '',
  loggedIn: false,
}

export const books = (state = initalState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return Object.assign({}, state, {
        loggedIn: action.status,
      })
    case REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query
      })
    case RECEIVE_BOOKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.status === 'success' ? action.payload : initalState.data,
        error: action.status === 'error' ? action.payload : initalState.error
      })
    default:
      return state;
  }
}