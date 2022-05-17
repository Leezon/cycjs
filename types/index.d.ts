export = cycjs;
export as namespace cycjs;
declare namespace cycjs {
  /**
   * 防抖
   * @param fn 句柄函数
   * @param delay 延迟时间，单位ms
   * @return 返回一个函数
   */
  export function debounce(fn: () => any, delay: number): () => any;

  /**
   * 节流
   * @param fn 句柄函数
   * @param delay 延迟时间，单位ms
   * @return 返回一个函数
   */
  export function throttle(fn: () => any, delay: number): () => any;

  /**
   * 判断数据类型，其结果有：string','number','null','undefined','object','symbol','array','function'
   * @param type 需要检测类型的数据
   * @return string
   */
  export function getType(type: any): string;

  /**
   * 数组转树
   * @param array 数据源，json数组
   * @param config {id,pid,children,every}
   * @returns 树形json数组
   */
  export function toTree<T>(
    array: T[],
    config: {
      id: string;
      pid: string;
      children: string;
      every: boolean;
    },
  ): T[];

  /**
   * 验证二代身份证有效性
   * @param idCard 身份证号码
   * @return boolean
   */
  export function verifyIdCard(idCard: string): boolean;

  /**
   * 缓动动画
   * @param el 元素
   * @param json 动画参数
   * @param callback 回调函数
   * eg: animate(document.body, { scrollTop: 200 }, () => {});
   */
  export function animation(
    el: HTMLElement,
    json: { [key: string]: any },
    callback: () => any,
  ): void;
}
