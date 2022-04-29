import type { Equal, Expect } from "@type-challenges/utils";
import { MyOmit } from "./template";

export type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, "description">>>,
  Expect<Equal<Expected2, MyOmit<Todo, "description" | "completed">>>
];

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
export type A = MyOmit<Todo, "title">;

interface Expected1 {
  title: string;
  completed: boolean;
}

interface Expected2 {
  title: string;
}
