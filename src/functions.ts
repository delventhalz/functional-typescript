// export const identity = (x: number): number => x;
// export const identity = (x: any): any => x;
export const identity = <T>(x: T): T => x;


export interface Predicate {
  (val: any): boolean;
}

export const negate = (predicate: Predicate): Predicate => (
  val => !predicate(val)
);








export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return curried.bind(null, ...args);
  }
}








const inc = (n: number): number => n + 1;

const eight = inc(7);

const curriedEight = curry(inc)(7);
