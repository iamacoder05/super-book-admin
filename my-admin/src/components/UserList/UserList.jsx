import React from 'react'

import { List, Datagrid, TextField, DateField, BooleanField, EmailField } from 'react-admin';

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="username" />
      <DateField source="dateOfRegistration" />
      <BooleanField source="status" />
      <TextField source="ipAddress" />
    </Datagrid>
  </List>
);

export default UserList;