export type MyCapitalize<S extends string> = S extends `${infer C}${infer R}`
  ? `${Uppercase<C>}${R}`
  : S;

type A<S extends string> = S extends `${infer C}${infer R}` ? `${C}|${R}` : S;
export type B = A<"hello">; // type B = "h|ello"
export type C = A<" Hss">; // type C = " |Hss"
