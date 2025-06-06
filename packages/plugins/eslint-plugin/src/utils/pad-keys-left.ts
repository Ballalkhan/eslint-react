import { transformKeys } from "./transform-keys";

export type PadKeysLeft<A, B extends string = ""> = A extends [] ? A
  : { [K in keyof A as `${B}${Extract<K, string>}`]: A[K] };

export function padKeysLeft<const A, const B extends string = "">(
  obj: A,
  left: B,
): PadKeysLeft<A, B> {
  return transformKeys(obj, (key) => `${left}${key}`) as never;
}
