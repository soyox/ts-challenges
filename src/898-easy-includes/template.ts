import { Equal } from "@type-challenges/utils";
export type Includes<T extends readonly any[], U> = T extends [
  infer F,
  ...infer R
]
  ? Equal<F, U> extends true
    ? true
    : Includes<R, U>
  : false;

type R = Equal<Includes<[{ a: "A" }], { readonly a: "A" }>, false>;
export const res: R = true;
console.log(res);

// 遍历元组的每一项是包含true(映射U在T中的存在关系)
export type delIncludes<
  T extends readonly any[],
  U
> = true extends toBooleanArr<T, U>[number] ? true : false;

type toBooleanArr<T extends readonly any[], U> = {
  [K in keyof T]: Equal<U, T[K]>;
  // K = number
};

type A = {};
type B = { foo: 1 };
export type C = B extends A ? "true" : "false";
//type C = "true"
type D = [];
type E = [1, 2, 3];
export type F = E extends D ? "true" : "false";
//type F = "false"
