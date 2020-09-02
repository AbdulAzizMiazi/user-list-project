import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import UserList from './Components/UserList/UserList';
import NotFound from './Components/NotFound/NotFound';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserList} />
        <Route path="/user/:id" exact component={UserDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
