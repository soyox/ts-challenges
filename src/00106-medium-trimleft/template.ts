type trim = " " | "\n" | "\t";
export type TrimLeft<S extends string> = S extends `${trim}${infer R}`
  ? TrimLeft<R>
  : S;
