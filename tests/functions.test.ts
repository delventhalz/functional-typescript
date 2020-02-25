import { identity, negate } from '../src/functions';

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
