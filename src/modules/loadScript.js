import getType from './getType';

function loadScript(urls) {
  const promisifyLoad = (url) => {
    return new Promise((resolve, reject) => {
      try {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        if (script.readyState) {
          // IE
          script.onreadystatechange = () => {
            if (
              script.readyState === 'loaded' ||
              script.readyState === 'complete'
            ) {
              script.onreadystatechange = null;
              resolve();
            } else {
              reject();
            }
          };
        } else {
          // Others
          script.onload = () => resolve();
          script.onerror = () => reject();
        }
        script.src = url;
        (
          document.getElementsByTagName('head')[0] || document.documentElement
        ).appendChild(script);
      } catch (e) {
        reject(e);
      }
    });
  };

  switch (getType(urls)) {
    case 'array':
      return Promise.all(urls.map(promisifyLoad));
    case 'string':
      return promisifyLoad(urls);
    default:
      return Promise.reject(new Error('loadScript params type error'));
  }
}

export default loadScript;
