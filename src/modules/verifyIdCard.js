/**
 * 验证 二代身份证 有效性
 * 算法：18位身份证号的最后一位根据前17位计算得出，
 *      计算公式是：x=∑(Ai×2的(17-i+1)次方) mod 11 ，
 *      其中i=1,2,3,...,17，Ai是第i位身份证号码（从左往右数），
 *      x结果是从0到10，分别对应的身份证最后一位是1 0 X 9 8 7 6 5 4 3 2
 * @param {String} idCard
 * @returns Boolean
 */
function verifyIdCard(idCard = '') {
  if (idCard.length !== 18) {
    return false;
  }
  let mod = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let calc =
    idCard
      .slice(0, 17)
      .split('')
      .reduce((pre, cur, index) => {
        pre += cur * Math.pow(2, 17 - index);
        return pre;
      }, 0) % 11;
  return mod[calc] === idCard.slice(-1).toUpperCase();
}

export default verifyIdCard;
