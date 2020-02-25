import { identity, negate, curry } from '../src/functions';

describe('identity', () => {
  it('returns the same number', () => {
    expect(identity(7)).toEqual(7);
  });

  it('returns the same string', () => {
    expect(identity('foo')).toEqual('foo');
  });

  it('returns the same boolean', () => {
    expect(identity(false)).toEqual(false);
  });

  it('returns the same object', () => {
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

describe('negate', () => {
  it('negates a predicate', () => {
    const isEven = (n: number) => n % 2 === 0;
    const isOdd = negate(isEven);

    expect(isOdd(7)).toEqual(true);
    expect(isOdd(42)).toEqual(false);
  });
});

describe('curry', () => {
  it('creates a curried function', () => {
    expect(typeof curry(identity)).toEqual('function');
  });

  it('allows function parameters to be partially applied', () => {
    const add = curry((x, y) => x + y);

    expect(typeof add(2)).toEqual('function');
    expect(add(3)(4)).toEqual(7);
   });

  it('allows any number of arguments to be passed at a time', () => {
    const addThree = curry((x, y, z) => x + y + z);

    expect(addThree(1, 2, 3)).toEqual(6);
    expect(addThree(2, 3)(4)).toEqual(9);
    expect(addThree(3)(4, 5)).toEqual(12);
    expect(addThree(4)(5)(6)).toEqual(15);
  });

  it('accepts functions with many parameters', () => {
    const addFive = curry((v, w, x, y, z) => v + w + x + y + z);
    expect(addFive(1, 2)(3, 4)(5)).toEqual(15);
  });

  it('accepts functions with no parameters', () => {
    const getFoo = curry(() => 'foo');
    expect(getFoo()).toEqual('foo');
  });
});
