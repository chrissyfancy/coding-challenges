import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router'

class Bookmarks extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: []
    }
    this.setLinks = this.setLinks.bind(this);
  }

  setLinks(link) {
    this.setState({ links: this.state.links.push(link) })
  }

  render() {
    let users
    if (this.props.location) {
      users = this.props.location.state
    }

    let links;
    if(users) {
      links = users.map(user => {
        this.setLinks(user.name)
        return <Link to={`/users/${user.id}`}>{user.name}</Link>
      })
    }

    return(
      <div>
      {links}
      </div>
    )
  }
}

export default Bookmarks;
