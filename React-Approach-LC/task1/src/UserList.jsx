import React from 'react';
import User from './User';

const UserList = ({ usersToDisplay }) => {
  console.log('usersToDisplay', usersToDisplay);
  if (!usersToDisplay || usersToDisplay.length === 0) {
    return <p>No users to display.</p>;
  }

  return (
    <ul className="users">
      {usersToDisplay.map(userItem => (
        <User key={userItem.id} {...userItem} />
      ))}
    </ul>
  );
};

export default UserList;
