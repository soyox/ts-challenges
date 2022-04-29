// export type MyAwaited<T> = T extends Promise<infer V>
//   ? V extends Promise<infer X>
//     ? X
//     : V
//   : T;
export type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T;
