import React from 'react';
import CompanyInformation from './CompanyInformation'

const UserInformation = props => {
  let user = props.user;
  let address = props.user.address;
  let company;
  if(user.company) {
    company = <CompanyInformation company={user.company} />
  }

  let handleBookmark = (event) => {
    event.preventDefault();
    props.bookmarkUsers(props.user)
  }

  return(
    <div>
      <h1>{user.name}</h1>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
      <div>Phone: {user.phone}</div>
      <div>Website: {user.website}</div>
      <form onSubmit={handleBookmark}>
        <input className="button" type="submit" value="Bookmark User" />
      </form>
      {company}
    </div>
  )
}

export default UserInformation;
