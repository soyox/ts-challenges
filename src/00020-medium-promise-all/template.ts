export declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: T[K] extends Promise<infer V> ? V : T[K];
}>;
// declare表示js的类型声明，不需要实现

// export function PromiseAll<T extends any[]>(values: readonly [...T]) {
//   const map = new Map();

//   return Promise.resolve();
// }
// function fn(value: string): string;
// function fn(value: number): number;
// function fn(value: string | number) {
//   if (typeof value === "string") return value;
//   if (typeof value === "number") return value + 1;
//   return value;
// }

// const x = fn(1);
