import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './components/NewPost';
import Dahboard from './components/Dashboard';
const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ Home } />
                
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } /> 
                  <Route exact path="/login/dashboard" component={ Dahboard } /> 
                  <Route exact path="/article" component={ NewPost } />   
               
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;