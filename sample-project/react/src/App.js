import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import UserContainer from './containers/UserContainer';
import UserShowContainer from './containers/UserShowContainer';
import Bookmarks from './components/Bookmarks';

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={UserContainer}/>
        <Route path='/users/:id' component={UserShowContainer}/>
        <Route path='/bookmarks' component={Bookmarks}/>
      </Route>
    </Router>
  )
}

export default App;
