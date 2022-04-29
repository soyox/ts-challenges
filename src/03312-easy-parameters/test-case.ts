import type { Equal, Expect } from "@type-challenges/utils";
import { MyParameters } from "./template";

const foo = (_arg1: string, _arg2: number): void => {};
const bar = (_arg1: boolean, _arg2: { a: "A" }): void => {};
const baz = (): void => {};
declare function fn(_arg1: { name: string; age: number }): void;

export type fooT = MyParameters<typeof foo>;
export const a: fooT = ["x", 1];
//type fooT = [_arg1: string, _arg2: number]
export type fnT = MyParameters<typeof fn>;
//type fnT = [_arg1: {
//     name: string;
//     age: number;
// }]
export type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
