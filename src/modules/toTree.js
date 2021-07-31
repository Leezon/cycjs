/**
 * 数组转树 利用数组和对象相互引用  时间复杂度O(n)
 * @param {Array} array 数据源
 * @param {Object} config {id,pid,children,every}
 * @returns Array
 */
function totree(array, config) {
  const cloneArray = JSON.parse(JSON.stringify(array));
  const baseConfig = {
    id: 'id',
    pid: 'pid',
    children: 'children',
    every: true,
  };
  const {
    id, pid, children, every,
  } = { ...baseConfig, ...config };
  const map = {};
  const result = [];

  cloneArray.forEach((item) => {
    map[item[id]] = item;
    if (every) {
      map[item[id]][children] = [];
    }
  });

  cloneArray.forEach((item) => {
    const newId = item[pid];
    if (map[newId] !== undefined) {
      if (map[newId][children]) {
        map[newId][children].push(item);
      } else {
        map[newId][children] = [item];
      }
    } else {
      result.push(item);
    }
  });
  return result;
}

export default totree;
