// const identity = (x: number): number => x;
// const identity = (x: any): any => x;
const identity = <T>(x: T): T => x;


interface Predicate {
  (val: any): boolean;
}

const negate = (predicate: Predicate): Predicate => (
  val => !predicate(val)
);
