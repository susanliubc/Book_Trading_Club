import React, { Component } from 'react';
import { Route, BrowerRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowerRouter>
        <div className="App">
          <Switch>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addbook' component={AddBook} />
            <Route path='/deletebook' component={DeleteBook} />
          </Switch>
        </div>
      </BrowerRouter>
    );
  }
}

export default App;
