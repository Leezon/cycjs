/**
 * 判断数据类型，其结果有：'string','number','null','undefined','object','symbol','array','function'
 */
function getType(type: any) {
  return Object.prototype.toString.call(type).slice(8, -1).toLowerCase();
}

export default getType;
