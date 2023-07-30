export type ExtractNullish<T> = T extends null | undefined ? T : never;

export const isNullish = <T>(x: T): x is ExtractNullish<T> => {
  return x === null || x === undefined;
};

export const mapSome = <T, U>(
  x: T,
  mapFn: (x: NonNullable<T>) => U,
): U | ExtractNullish<T> => {
  if (isNullish(x)) {
    return x;
  }
  return mapFn(x as NonNullable<T>);
};
