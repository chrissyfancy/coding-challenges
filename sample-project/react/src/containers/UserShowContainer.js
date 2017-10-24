import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import UserInformation from '../components/UserInformation';

class UserShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      bookmarkedUsers: []
    }
    this.bookmarkUsers = this.bookmarkUsers.bind(this);
  }

  componentDidMount(){
    let userId = this.props.params.id
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(user => {
      this.setState({ userInfo: user[userId - 1]})
    })
  }

  bookmarkUsers(user) {
    this.setState({ bookmarkedUsers: this.state.bookmarkedUsers.push(user) })
    browserHistory.push({pathname: `/bookmarks`, state: this.state.bookmarkedUsers });
  }

  render(){
    return(
      <UserInformation
        id={this.state.userInfo.id}
        name={this.state.userInfo.name}
        user={this.state.userInfo}
        bookmarkUsers={this.bookmarkUsers}
      />
    )
  }
}

export default UserShowContainer;
