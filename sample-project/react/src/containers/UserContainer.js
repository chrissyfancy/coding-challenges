import React, { Component } from 'react';
import UserTile from '../components/UserTile';
import Bookmarks from '../components/Bookmarks'

class UserContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      bookmarkedUsers: []
    }
    this.bookmarkUser = this.bookmarkUser.bind(this);
    this.fetchBookmarks = this.fetchBookmarks.bind(this);
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(users => {
      this.setState({ users: users})
    })
    this.fetchBookmarks();
  }

  fetchBookmarks() {
    fetch("/bookmarks")
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(users => {
      this.setState({ bookmarkedUsers: users})
    })
  }

  bookmarkUser(user) {
    fetch(`/bookmarks`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`;
        let error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(users => {
      this.setState({ bookmarkedUsers: users })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let alphabetizedUsersDesc = this.state.users.sort(function(a, b){
      if(a.name < b.name) return 1;
      if(a.name > b.name) return -1;
      return 0;
    })

    let users = alphabetizedUsersDesc.map(user => {
      return(
        <UserTile
          key={user.id}
          id={user.id}
          user={user}
          bookmarkUser={this.bookmarkUser}
        />
      )
    })

    return(
      <div>
        <Bookmarks users={this.state.bookmarkedUsers} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>E-mail</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users}
          </tbody>
        </table>
      </div>
    )
  }
}

export default UserContainer;
