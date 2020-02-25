export function range(len: number): number[] {
  return Array(...Array(len)).map((_, i) => i);
};


export const head = <T>(arr: T[]): T => arr[0];
export const tail = <T>(arr: T[]): T[] => arr.slice(1);


export interface Iteratee<T, U> {
  (t: T, i: number, a: T[]): U;
}

export function map<T, U>(arr: T[], iteratee: Iteratee<T, U>): U[] {
  const mapped = [];

  for (let i = 0; i < arr.length; i++) {
    mapped.push(iteratee(arr[i], i, arr));
  }

  return mapped;
};
