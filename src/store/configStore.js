import { createStore, compose, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const middlewares = [ThunkMiddleware];

if (process.env.NODE_ENV === 'dev') {
  const logger = createLogger();
  // middlewares.push(logger);
}

const finalCreateStore = compose(
  applyMiddleware(
    ...middlewares
  )
)(createStore);

export default function configStore(initState) {
  const store = finalCreateStore(reducer, initState);
  return store;
};