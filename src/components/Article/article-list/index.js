import React from 'react';
import ArticleItem from '../article-item';

import './style.css';

const ArticleList = ({ articles }) => (
  <div>
    {
      Array.isArray(articles) && articles.map((article, index) => (
        <ArticleItem
          {...article}
          key={index}
        />
      ))
    }
  </div>
);

export default ArticleList;