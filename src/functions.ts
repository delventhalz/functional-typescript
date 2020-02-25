// export const identity = (x: number): number => x;
// export const identity = (x: any): any => x;
export const identity = <T>(x: T): T => x;


export interface Predicate {
  (val: any): boolean;
}

export const negate = (predicate: Predicate): Predicate => (
  val => !predicate(val)
);
