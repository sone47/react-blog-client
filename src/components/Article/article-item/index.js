import React from 'react';
import moment from 'moment';

import './style.css';

const ArticleItem = ({ title, content, createTime }) => (
  <article className="article">
    <div className="meta">
      <time className="time">{moment(createTime).format('ll')}</time>
    </div>
    <h1 className="title">{title}</h1>
    <div className="content">{content}</div>
  </article>
);

export default ArticleItem;