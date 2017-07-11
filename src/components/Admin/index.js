import React from 'react';
import Login from '../Login';

class Admin extends React.Component {
  componentDidMount() {
    const token = sessionStorage.getItem('admin-token');
    if(token) {
      this.props.userActions.verify({ token });
    }
  }

  render() {
    const {userActions, isAdmin, loading, token, error} = this.props;

    return (isAdmin ? <div>管理员页面</div> : <Login
      loginAction={userActions.login}
      loading={loading}
      error
    />);
  }
};

export default Admin;