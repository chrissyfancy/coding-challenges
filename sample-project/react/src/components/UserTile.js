import React from 'react';
import { Link } from 'react-router';

const UserTile = props => {
  let user = props.user;
  let address = props.user.address;
  let streetAddress = `${address.street}, ${address.suite}`
  let stateAddress = `${address.city}, ${address.zipcode}`

  let handleBookmark = (event) => {
    event.preventDefault();
    props.bookmarkUser(user)
  }

  return(
    <tr>
      <td><Link to={`/users/${props.id}`}>{user.name}</Link></td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <div>{streetAddress}</div>
        <div>{stateAddress}</div>
      </td>
      <td>
        <form onSubmit={handleBookmark}>
          <input className="button" type="submit" value="Bookmark" />
        </form>
      </td>
    </tr>
  )
}

export default UserTile;
