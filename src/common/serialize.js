const serialize = (url, query) => {
  Object.keys(query).forEach(key => {
    if(query[key] !== undefined) {
      if(url.indexOf('?') === -1) {
        url += `?${key}=${query[key]}`;
      } else {
        url += `&${key}=${query[key]}`;
      }
    }
  });

  return url;
};

export default serialize;