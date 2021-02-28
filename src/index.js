import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css'

import { Provider } from 'react-redux';

import createStore from  './store';
const store = createStore();

// setTimeout(() => {
//    store.dispatch({
//        type:'ADD_BOOKS',
//        payload:
//            {
//               id:1,
//               title:'Hello World' 
//            }
       
//    })
// }, 1000)

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root')
);

