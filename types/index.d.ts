export = leezon;
declare namespace leezon {
  export function debounce(fn: Function, delay: number): Function;
  export function throttle(fn: Function, delay: number): Function;
  export function getType(type: any): String;
  export function toTree(array: array, config: object): array;
  export function verifyIdCard(idCard: string): boolean;
  export function animation(
    el: HTMLElement,
    json: object,
    callback: Function
  ): void;
}
