export = cycjs;
export as namespace cycjs;
declare namespace cycjs {
  export function debounce(fn: () => any, delay: number): () => any;

  export function throttle(fn: () => any, delay: number): () => any;

  export function getType(type: any): string;
  interface IToTreeConfig {
    id: string;
    pid: string;
    children: string;
    every: boolean;
  }
  interface IToTreeArray {
    [propName: string]: any;
  }
  export function toTree(
    array: IToTreeArray[],
    config: IToTreeConfig,
  ): IToTreeArray[];

  export function verifyIdCard(idCard: string): boolean;

  export function animation(
    el: HTMLElement,
    json: object,
    callback: () => any,
  ): void;
}
