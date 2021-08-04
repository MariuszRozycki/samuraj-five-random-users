import React from 'react';
const UsersList = props => {
  console.log(props.users);
  const users = props.users.map(user => (
    <div key={user.login.uuid}>
      <h4>{`${user.name.title} ${user.namefirst} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </div>
  ));

  return (
    <>
      {users}
    </>
  );
}

export default UsersList;
