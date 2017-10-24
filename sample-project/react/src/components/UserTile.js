import React from 'react';
import { Link } from 'react-router';

const UserTile = props => {
  let user = props.user;
  let address = props.user.address;
  let streetAddress = `${address.street}, ${address.suite}`
  let stateAddress = `${address.city}, ${address.zipcode}`

  return(
    <tr>
      <td><Link to={`/users/${props.id}`}>{user.name}</Link></td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <div>{streetAddress}</div>
        <div>{stateAddress}</div>
      </td>
    </tr>
  )
}

export default UserTile;
