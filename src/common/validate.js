export const required = (value, error = '表单未完成') => {
  if(value && Array.isArray(value)) {
    return value.every(v => v && v.trim()) ? undefined : error;
  }
  return value && value.trim() ? undefined : error;
};

export const isEmail = (email, error = '邮箱非法') => 
  email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ?
  error : undefined;

export const isWebsite = (website, error = '网址非法') => 
  website && !/^((https?):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/.test(website) ?
  error : undefined;