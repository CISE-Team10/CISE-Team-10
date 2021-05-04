import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
//import ShowBookList from './components/ShowBookList';
//import ShowBookDetails from './components/ShowBookDetails';
//import UpdateBookInfo from './components/UpdateBookInfo';
import ShowarticleList from './components/ShowArticleList';
import LoginScreen from './components/LoginScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ShowarticleList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/login-screen' component={LoginScreen} />
        </div>
      </Router>
    );
  }
}

//  <Route path='/edit-book/:id' component={UpdateBookInfo} />
//  <Route path='/show-book/:id' component={ShowBookDetails} />
//useless paths for now, taking them out here till they are removed completely

export default App;