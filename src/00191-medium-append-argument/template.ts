export type AppendArgument<Fn extends (...args: any) => any, A> = Fn extends (
  ...args: infer Rest
) => infer R
  ? (...args: [...Rest, A]) => R
  : Fn;
