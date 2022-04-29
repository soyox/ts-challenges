export type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & Record<K, V>>;
  get(): T;
};
type A<K extends string> = Record<K, unknown>;
// type A<K extends string> = {[k: K]: unknown};
//索引签名参数类型不能为文本类型或泛型类型。请考虑改用映射的对象类型。ts(1337

export const a: A<string> = {
  n: 1,
};
// type A = {
//   [x: number]: number;
// };
// type B = Record<number, number>;
// const v: A = {
//   1: 2,
// };
