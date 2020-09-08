import React, { useEffect, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Main } from '../pages/Main';
import { getUsers } from '../state/requests';
import { UsersDispatch } from '../state/Contexts';

export const Content = ({ user }) => {
  const { dispatch } = useContext(UsersDispatch);

  useEffect(() => {
    getUsers().then((users) => dispatch({ type: 'set', payload: users }));
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      {!user && <Redirect to="/login" />}
      <Route path="/main" render={() => <Main user={user} />}></Route>
    </Switch>
  );
};
