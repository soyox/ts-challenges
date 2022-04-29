export type MyReadonly2<T, P extends keyof T = keyof T> = {
  readonly [K in keyof T]: T[K];
} & {
  [K in keyof T as K extends P ? never : K]: T[K];
};

// interface A {
//   readonly a: number;
//   readonly b: string;
//   c: true;
// }

// interface B {
//   b: string;
//   c: true;
// }

// type C = A & B;
// const v: C = {
//   a: 1,
//   b: "3",
//   c: true,
// };
// v.a = 2; //无法分配到 "a" ，因为它是只读属性。ts(2540)
// v.b = "2";
