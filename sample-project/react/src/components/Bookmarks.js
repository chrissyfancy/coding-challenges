import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

const Bookmarks = props => {
  let links;
  if(props.users) {
    links = props.users.map(user => {
      return <Link to={`/users/${user.id}`}>{user.name}</Link>
    })
  }

  return(
    <div className="bookmarks">
      {links}
    </div>
  )
}

export default Bookmarks;
