import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Map/>
          </Route>
          <Route path='/admin'>
            <Map/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
