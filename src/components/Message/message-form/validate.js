export const required = value => {
  const error = '除个人主页外不能为空';

  if(value && Array.isArray(value)) {
    return value.every(v => v && v.trim()) ? undefined : error;
  }
  return value && value.trim() ? undefined : error;
};

export const isEmail = email => 
  email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ?
  '邮箱非法' : undefined;

export const isWebsite = website => 
  website && !/^((https?):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/.test(website) ?
  '网址非法' : undefined;