/**
 *判断数据类型，其结果有：
 'string','number','null','undefined','object','symbol','array','function'
 * @param {Any} type
 * @returns String
 */
function getType(type) {
  return typeof type === 'object'
    ? Object.prototype.toString
      .call(type)
      .match(/[A-Z][a-z]+/)[0]
      .toLowerCase()
    : typeof type;
}

export default getType;
