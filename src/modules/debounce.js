/**
 *防抖：单位时间内再次触发，则重新计时
 * @param {Function} fn
 * @param {Number} delay unit 'ms',default is 100
 * @returns function
 */
function debounce(fn, delay = 100) {
  let timer;
  // eslint-disable-next-line func-names
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // fn.call(this, ...args); //二选一
      fn.apply(this, args);
    }, delay);
  };
}

// export function debounce(fn, delay = 100) {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(fn.bind(this, ...args), delay);
//   };
// }

export default debounce;
