export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer P}${From}${infer L}`
  ? `${P}${To}${L}`
  : S;
