import React from 'react'
import './App.css';
import Router from './router';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import reducerDetails from './reducers/reducerDetail';

function App() {

  const store = createStore(reducerDetails)

  return (
    <div className="App">
      <Provider store={store}>
         <Router></Router>
      </Provider>
       
    </div>
  );
}

export default App;
