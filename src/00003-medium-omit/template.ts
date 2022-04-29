export type MyOmit<T, U extends keyof T> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};
// export type MyExclude<T, U> = T extends U ? never : T;
// Exclude是操作的联合类型！

type A = {
  a: 1;
  b: "2";
  c: true;
};
export type B = MyOmit<A, "b" | "c">;
