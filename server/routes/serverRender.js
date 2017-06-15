import { Router } from 'express';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import { createMemoryHistory } from 'history';
import DocumentMeta from 'react-document-meta';

import configStore from '../../src/store/configStore';
import { getInitialState } from '../../src/reducers';
import createRouets from '../../src/routes';

import config from '../../config';

const serverRender = Router();

serverRender.route('*').get((req, res) => {
  let routes = createRouets(createMemoryHistory()),
      store = configStore(getInitialState());

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if(!renderProps) {
      // res.status(404);
      // res.redirect('/404');
      res.status(404).send('Not Found');
    } else if(renderProps) {
      const reduxState = JSON.stringify(store.getState()).replace(/</g, '\\x3c'),
            html = renderToString(<Provider store={ store }><RouterContext { ...renderProps }/></Provider>),
            meta = DocumentMeta.renderAsHTML(),
            metaProps = {
              title: 'Blog',
              description: 'react-blog',
              meta: {
                charset: 'utf-8',
                name: {
                  keywords: '前端, javascript, react, node, koa'
                }
              }
            };
            // meta = renderToStaticMarkup(<DocumentMeta { ...metaProps } />);

      res.status(200).render('../dist/', {
        meta,
        html,
        reduxState
      });
    }
  });
});

export default serverRender;