import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const composeEnhancer = compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;