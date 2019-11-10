import { combineReducers } from 'redux';
import counter from './counter';
import todo from './todo';
import auth from './auth';
// export reducers
export const reducers = combineReducers({
    counter,
    todo,
    auth,
});
