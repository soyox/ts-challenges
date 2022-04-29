// export type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
export type First<T extends any[]> = T extends [] ? never : T[0];

const tuple = [1, 2, 3] as const;
type a = typeof tuple;
export const b: a = [1, 2, 3];
type c = a["length"];
export const d: c = 3;

type g = [];
export type t = never extends g ? true : false;
