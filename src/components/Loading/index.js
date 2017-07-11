import React from 'react';
import { Icon } from 'antd';
import './style.css';

const Loading = ({text, size}) => (
  <div className="loader-container">
    <Icon type="loading-3-quarters" spin style={{ fontSize: size || 20 , color: '#23ade5' }} />
    { text && <p>{text}</p> }
  </div>
);

export default Loading;