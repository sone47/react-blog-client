const apiPort = 3000,
      serverPath = 'http://localhost';

const dev = {
  public_path: 'http://localhost:4000',
  port: 4000,
  api: {
    port: 3000,
    message: `${serverPath}:${apiPort}/message`,
    login: `${serverPath}:${apiPort}/token`,
    verify: `${serverPath}:${apiPort}/auth`,
  }
};

const prod = Object.assign({}, dev, {

});

module.exports = (process.env.NODE_ENV === 'dev' ? dev : prod);