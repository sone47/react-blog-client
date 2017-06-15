import { message } from 'antd';
import xss from 'xss';
import { required, isEmail, isWebsite } from './validate';

// 修改全局提示高度
message.config({ top: 80 });

const submit = (action, reset, error) => ({ name, content, email, website }) => {
  return new Promise((resolve, reject) => {
    let error = required([name, content, email]);
    if(!error) {
      error = isEmail(email);
      if(!error && website) {
        error = isWebsite(website);
      }
    }

    // 在下一次全局提示出现时销毁上一次的
    message.destroy();

    if(error) {
      reject(error);
    }

    resolve({ name, content, email, website });
  })
  .then(opts => {
    // 将用户的输入使用 xss 过滤
    Object.keys(opts).forEach(key => opts[key] = xss(opts[key]));
    // 发布留言至服务器
    action(opts)
      .then(() => {
        message.success('发布成功');
        reset();
      });
  })
  .catch(_error => {
    message.error(_error);
  });
};

export default submit;