import React from 'react';
import ArticleList from './article-list';

import './style.css';

const articles = [
  {
    title: 'HTTPS 常见部署问题',
    content: '在最近几年里，我写了很多有关 HTTPS 和 HTTP/2 的文章，涵盖了证书申请、Nginx 编译及配置、性能优化等方方面面。在这些文章的评论中，不少读者提出了各种各样的问题，我的邮箱也经常收到类似的邮件。本文用来罗列其中有代表性、且我知道解决方案的问题。',
    createTime: Date.now()
  },{
    title: 'HTTPS 常见解决方案',
    content: '如果只有老旧浏览器（例如 IE8 on Windows XP）提示这个错误，多半是因为你的服务器同时部署了使用不同证书的多个 HTTPS 站点，这样，不支持 SNI（Server Name Indication）的浏览器通常会获得错误的证书，从而无法访问。要解决浏览器不支持 SNI 带来的问题，可以将使用不同证书的 HTTPS 站点部署在不同服务器上；还可以利用 SAN（Subject Alternative Name）机制将多个域名放入同一张证书；当然你也可以直接无视这些老旧浏览器。特别地，使用不支持 SNI 的浏览器访问商业 HTTPS CDN，基本都会因为证书错误而无法使用。',
    createTime: Date.now()
  },
];

const Article = () => (
  <div id="articles-wrap">
    <ArticleList
      articles={articles}
    />
  </div>
);

export default Article;