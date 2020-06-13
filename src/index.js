import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const formReducer = (state = 0, action) => {
    console.log('in formReducer', 'state:', state, 'action.type:', action.type);
  if (action.type === 'NEW_FEELING') {
    return { ...state, feeling: action.payload }
  }
  else if (action.type === 'NEW_UNDERSTANDING') {
    return { ...state, understanding: action.payload }
  }
  else if (action.type === 'NEW_SUPPORT') {
    return { ...state, support: action.payload }
  }
  else if (action.type === 'NEW_COMMENT') {
    return { ...state, comments: action.payload }
  }
  return state;
}//end formReducer

const storeInstance = createStore( formReducer);
ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
