export type DeepReadonly<T> = T extends
  | Record<string | number | symbol, unknown>
  | Array<unknown>
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

type Fn = () => void; // true
// type Fn = []; // true

export type A = Fn extends Object ? "1" : "0";

type B = {
  a: {
    b: {
      c: {
        d: string;
      };
    };
  };
  b: [1, 2, 3];
};
type C = DeepReadonly<B>;
export const v: C = {
  a: {
    b: {
      c: {
        d: "s",
      },
    },
  },
  b: [1, 2, 3],
};

// v.a.b.c.d = 's'
// v.b[1] = 1
