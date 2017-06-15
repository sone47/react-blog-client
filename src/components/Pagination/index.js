import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Pagination } from 'antd';

import './style.css';

class MyPagination extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onShowSizeChange = this.onShowSizeChange.bind(this);
  }

  state = {
    current: 1,
    pageSize: 10
  };

  onChange(page, pageSize) {
    this.props.fetch(page, pageSize)
      .then(() => {
        this.setState({ current: page });
      });
  }

  onShowSizeChange(current, size) {
    this.props.fetch(this.state.current, size)
      .then(() => {
        this.setState({ pageSize: size });
      });
  }

  render() {
    const { total } = this.props;

    return (
      <Pagination
        defaultCurrent={1}
        current={this.state.current}
        total={total}
        defaultPageSize={20}
        pageSize={this.state.pageSize}
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        onChange={this.onChange}
      />
    );
  }
}

export default MyPagination;