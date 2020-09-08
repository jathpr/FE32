import React, { useContext } from 'react';
import { List, Divider } from 'antd';
import { UsersContext } from '../state/Contexts';

export const Users = () => {
  const users = useContext(UsersContext);

  return (
    <>
      <Divider orientation="left">List of Users</Divider>
      <List
        size="large"
        bordered
        dataSource={users}
        renderItem={(user) => (
          <List.Item>
            Name: {user.login}, Other: {user.other}
          </List.Item>
        )}
      />
    </>
  );
};
