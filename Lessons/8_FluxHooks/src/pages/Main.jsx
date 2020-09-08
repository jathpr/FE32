import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Header as MyHeader } from '../components/Header';
import { SideMenu } from '../components/SideMenu';
import { Home } from './Home';
import { Users } from './Users';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

export const Main = ({ user }) => {
  return (
    <Layout>
      <Header className="header" style={{ backgroundColor: 'blue', height: '10vh' }}>
        <MyHeader user={user} />
      </Header>
      <Layout>
        <Sider width={200} style={{ height: '90vh' }}>
          <SideMenu />
        </Sider>
        <Content>
          <Switch>
            <Route path="/main/home" component={Home} />
            <Route path="/main/users" component={Users} />
            <Redirect to="/main/home" />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};
