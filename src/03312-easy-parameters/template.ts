export type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => void
  ? P
  : never;
