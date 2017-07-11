import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Admin from '../../components/Admin';
import * as loginActions from '../../actions/user/login';
import * as verifyActions from '../../actions/user/verify';

let actions = Object.assign({}, loginActions, verifyActions);

const mapStateToProps = state => {
  let { name, token, isAdmin, loading, error } = state.user;

  return {
    name,
    isAdmin,
    token,
    loading,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);