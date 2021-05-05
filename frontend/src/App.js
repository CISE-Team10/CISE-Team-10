import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
//import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import ShowarticleList from './components/ShowArticleList';
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/login">
          <Login />
          </Route>
          <Route exact path='/' component={ShowarticleList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}


export default App;