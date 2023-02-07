import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css'

const UserList = (props) => {


  return (
    <Card className={classes.users}>
      <ul>
        {props.userListItem.map((user) => (
          <li key={user.id} onClick={props.onDeleteUser}>
            <div>{user.username} ({user.age} years old)</div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

