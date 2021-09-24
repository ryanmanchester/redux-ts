import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesreducer';

const reducers = combineReducers({
  repositories: repositoriesReducer
})

export default reducers;
