import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer';
import Router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss'
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  serialize: { // prettier-ignore
    immutable: Immutable
  }
}) : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(<Router store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();