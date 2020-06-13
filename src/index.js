import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const formReducer = () => {
    console.log('in formReducer')
}//end formReducer

const storeInstance = createStore( formReducer);
ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
