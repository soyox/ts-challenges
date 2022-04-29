import type { Equal, Expect } from "@type-challenges/utils";
import { TupleToObject } from "./template";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type T = typeof tuple; //readonly ["tesla", "model 3", "model X", "model Y"]
type V = T[number]; // "tesla" | "model 3" | "model X" | "model Y"
export const k: V = "model 3"; // tesla model X model Y

export type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;