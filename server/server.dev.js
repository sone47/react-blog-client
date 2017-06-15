import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';

import config from '../config';
import route from './routes/serverRender';

const app = express();

if(process.env.NODE_ENV === 'dev') {
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath,
    colors: true
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.set('view engine', 'ejs');
app.set('dist');

app.use(express.static(__dirname + '/../dist'));
app.use('/', route);

app.disable('x-powered-by');

const server = app.listen(config.port, () => {
  const {port} = server.address();
  console.info(`环境 -> ${process.env.NODE_ENV}`);
  console.info(`地址 -> http://localhost:${port}`);
});