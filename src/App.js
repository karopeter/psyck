import React from 'react';
import Home from './pages/index';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
