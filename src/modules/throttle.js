/**
 *节流：单位时间内只执行一次
 * @param {Function} fn
 * @param {Number} delay default is 100ms
 * @returns function
 */
function throttle(fn, delay = 100) {
  let canRun = true;
  return (...args) => {
    if (!canRun) return;
    canRun = false;
    setTimeout(() => {
      fn.apply(this, args);
      canRun = true;
    }, delay);
  };
}

// export function throttle(fn, delay = 100) {
//   let prev = Date.now();
//   return function (...args) {
//     let now = Date.now();
//     if (now - prev >= delay) {
//       fn.apply(this, args);
//       prev = Date.now();
//     }
//   };
// }

export default throttle;
