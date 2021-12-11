import { createStore,combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import dataReducer from './reducers/data';

const appReducer = combineReducers({
    data:dataReducer
});

const store = createStore(appReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;