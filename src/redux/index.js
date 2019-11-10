import { createStore } from 'redux';
import { reducers } from './reducers/index';

// export store
export const store = createStore(reducers);