import React from 'react';
import logo from './logo.svg';
import './App.css';
import Store from "./actions/store"
import Provider from "react-redux"
import DCandidates from './Components/DCandidates';

function App() {
  return (
    <Provider store= {store}>
<DCandidates></DCandidates>
    </Provider>
  );
}

export default App;
