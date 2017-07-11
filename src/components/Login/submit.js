import { message } from 'antd';
import xss from 'xss';
import md5 from 'md5';
import { required, isEmail, isWebsite } from '../../common/validate';

const submit = (action, error) => ({ username, password }) => {
  return new Promise((resolve, reject) => {
    let error = required([username, password]);

    // 在下一次全局提示出现时销毁上一次的
    message.destroy();

    if(error) {
      reject(error);
    }

    resolve({ username, password });
  })
  .then(opts => {
    // 将用户的输入使用 xss 过滤
    Object.keys(opts).forEach(key => opts[key] = xss(opts[key]));

    password = opts.password;
    opts.password = md5(password + 'whatthehell');
    // 发布留言至服务器
    action(opts);
  })
  .catch(_error => {
    message.error(_error);
  });
};

export default submit;