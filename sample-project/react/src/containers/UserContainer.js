import React, { Component } from 'react';
import UserTile from '../components/UserTile';
import Bookmarks from '../components/Bookmarks';
import { browserHistory } from 'react-router';

class UserContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
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
        />
      )
    })

    return(
      <div>
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
