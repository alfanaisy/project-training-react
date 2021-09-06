import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

import './App.css';
import Home from './Pages/Home.jsx';
import Details from './Pages/Details.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/details/:id" exact component={Details} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
