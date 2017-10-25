import React from 'react';
import CompanyInformation from './CompanyInformation'

const UserInformation = props => {
  let user = props.user;
  let address = props.user.address;
  let company;
  if(user.company) {
    company = <CompanyInformation company={user.company} />
  }

  return(
    <div>
      <h1>{user.name}</h1>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
      {company}
    </div>
  )
}

export default UserInformation;
