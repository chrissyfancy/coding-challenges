import React from 'react';
import { Link } from 'react-router'
import BackButton from './BackButton'
import { browserHistory } from 'react-router';
import { createBrowserHistory } from 'history'
import Bookmarks from './Bookmarks'

const NavBar = props => {
  return(
    <div>
      <div className="nav">
        <BackButton />
        <Link to='/'>All Users</Link>
      </div>
      {props.children}
    </div>
  )
}

export default NavBar;
