export type MyExclude<T, U> = T extends U ? never : T;

null ?? console.log(true);
