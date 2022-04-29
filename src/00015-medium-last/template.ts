export type Last<T extends any[]> = T extends [...infer _R, infer Last]
  ? Last
  : never;
