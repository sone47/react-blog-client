import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Message from '../../components/Message';
import * as fetchActions from '../../actions/message/fetch';
import * as addActions from '../../actions/message/add';

let actions = Object.assign({}, fetchActions, addActions);

const mapStateToProps = state => {
  let { messages, total, loading, error } = state.message;

  return {
    messages,
    loading,
    total,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  msgActions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);