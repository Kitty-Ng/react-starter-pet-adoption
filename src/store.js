import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
  reducer,
  typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' //if you want to use saga or thunk, apply here
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

export default store;
