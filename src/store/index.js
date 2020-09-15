import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

export default createStore(reducer, compose(applyMiddleware(thunk)));
