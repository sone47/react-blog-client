import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configStore from './store/configStore';
import Blog from './routes.js';

const store = configStore();

ReactDOM.render((
  <Provider store={store}>
    <Blog/>
  </Provider>
), document.getElementById('root'));