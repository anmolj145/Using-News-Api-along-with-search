import React from 'react';
import './App.css';
import MainComponent from './MainComponent/MainComponent'
import store from './store/store'
import { Provider } from 'react-redux' 

function App() {
  return (
    <Provider store={store}>
      <MainComponent/>
    </Provider>
  );
}

export default App;