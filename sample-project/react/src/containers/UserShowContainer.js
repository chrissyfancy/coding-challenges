import React, { Component } from 'react';
import UserInformation from '../components/UserInformation';

class UserShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {}
    }
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

  render(){
    return(
      <UserInformation
        id={this.state.userInfo.id}
        name={this.state.userInfo.name}
        user={this.state.userInfo}
      />
    )
  }
}

export default UserShowContainer;
