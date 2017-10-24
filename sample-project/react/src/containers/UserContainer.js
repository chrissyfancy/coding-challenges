import React, { Component } from 'react';
import UserTile from '../components/UserTile';

class UserContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      bookmarkedUsers: []
    }
    this.bookmarkUsers = this.bookmarkUsers.bind(this);
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(users => {
      this.setState({ users: users})
    })
  }

  bookmarkUsers(user) {
    debugger
    let previous = this.state.bookmarkUsers;
    this.setState({ bookmarkUsers: previous.push(user) })
  }

  render(){
    console.log(this.state.bookmarkedUsers)

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
          bookmarkUsers={this.bookmarkUsers}
        />
      )
    })

    return(
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
    )
  }
}

export default UserContainer;
