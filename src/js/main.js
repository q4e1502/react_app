import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App.jsx';

const reducer = (state, action) => {

}
const store = createStore(reducer,0)

store.subscribe(() => {
	console.log('change', store.getState())
})

store.dispatch({type: "123"});
ReactDOM.render(<App />, document.getElementById('main'));