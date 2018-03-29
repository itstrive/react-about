import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import TodoApp from './components/TodoApp'
import StoreModel from './components/StoreModel'


let store = new StoreModel();

function render(){
    ReactDOM.render(<TodoApp store={store} />, document.getElementById('root'));
}
store.subscribe(render);
render();
