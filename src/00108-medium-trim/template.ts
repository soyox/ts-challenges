// import { TrimLeft } from "../00106-medium-trimleft/template";

type trim = " " | "\n" | "\t";
// type TrimRight<S extends string> = S extends `${infer R}${trim}`
//   ? TrimRight<R>
//   : S;
// export type Trim<S extends string> = TrimRight<TrimLeft<S>>;

export type Trim<S extends string> = S extends
  | `${trim}${infer R}`
  | `${infer R}${trim}`
  ? Trim<R>
  : S;
