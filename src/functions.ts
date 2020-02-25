// export const identity = (x: number): number => x;
// export const identity = (x: any): any => x;
export const identity = <T>(x: T): T => x;


export interface Predicate {
  (val: any): boolean;
}

export const negate = (predicate: Predicate): Predicate => (
  val => !predicate(val)
);


interface CurriedFunction1<T, R> {
  (): CurriedFunction1<T, R>;
  (t: T): R;
}

interface CurriedFunction2<T1, T2, R> {
  (): CurriedFunction2<T1, T2, R>;
  (t1: T1): CurriedFunction1<T2, R>;
  (t1: T1, t2: T2): R;
}

interface CurriedFunction3<T1, T2, T3, R> {
  (): CurriedFunction3<T1, T2, T3, R>;
  (t1: T1): CurriedFunction2<T2, T3, R>;
  (t1: T1, t2: T2): CurriedFunction1<T3, R>;
  (t1: T1, t2: T2, t3: T3): R;
}

export function curry<T, R>(fn: (t: T) => R): CurriedFunction1<T, R>;
export function curry<T1, T2, R>(fn: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>;
export function curry<T1, T2, T3, R>(fn: (t1: T1, t2: T2, t3: T3) => R): CurriedFunction3<T1, T2, T3, R>;
export function curry(fn: (...args: any[]) => any): (...args: any[]) => any;

export function curry(fn: (...args: any[]) => any) {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return curried.bind(null, ...args);
  };
}
