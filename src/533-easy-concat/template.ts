export type Concat<T extends any[], U extends any[]> = [...T, ...U];

type A = [1, 2, 3];
type B = [4, 5];
export type C = [...A, ...B];
// type C = [1, 2, 3, 4, 5]
