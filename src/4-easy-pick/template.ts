export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//联合类型
export type Union = number | string;

//? keyof T
// 取出T的所有key组成一个联合类型
//? K extends keyof T
// 约束， 使传入的K类型需包含在keyof T中
//? P in K
// [mapped]遍历K的每一项拿到P
//? T[P]
// 获取T中key为P的类型
