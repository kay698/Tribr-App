import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import NotFound from '../views/404';
import Signup from '../views/Signup';
import Login from '../views/Login';
import About from '../views/About';
import Contact from '../views/Contact';
import ThemeProvider from '../helpers/themes/ThemeProvider.helper';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route exact path = {"/"} component = {Home} />
          <Route exact path = {"/about"} component = {About} />
          <Route exact path = {"/contact"} component = {Contact} />
          <Route exact path = {"/login"} component = {Login} />
          <Route exact path = {"/signup"} component = {Signup} />
          <Route exact path = {"/dashboard"} component = {Dashboard} />
          <Route exact path = {"*"} component = {NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
