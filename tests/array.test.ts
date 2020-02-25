import { range, head, tail, map } from '../src/arrays';

describe('range', () => {
  it('makes an array of the specified length', () => {
    const arr = range(3);

    expect(Array.isArray(arr)).toEqual(true);
    expect(arr.length).toEqual(3);
  });

  it('uses indexes for array values', () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
  });

  it('creates an empty array', () => {
    expect(range(0)).toEqual([]);
  });
});

describe('head', () => {
  it('gets the first item in an array', () => {
    expect(head([7, 8, 9])).toEqual(7);
  });

  it('returns undefined if there is no head', () => {
    expect(head([])).toEqual(undefined);
  });
});

describe('tail', () => {
  it('gets every item from an array other than the first', () => {
    expect(tail([7, 8, 9])).toEqual([8, 9]);
  });

  it('returns an empty array if there is no tail', () => {
    expect(tail(['foo'])).toEqual([]);
  });
});

describe('map', () => {
  it('applies an iteratee function to the items in an array', () => {
    const nums = map(['4', '5', '6'], Number);
    expect(nums).toEqual([4, 5, 6]);
  });

  it('passes the index as the second argument', () => {
    const indexes = map(['foo', 'bar', 'baz'], (_, i) => i);
    expect(indexes).toEqual([0, 1, 2]);
  });

  it('passes the array as the third argument', () => {
    const trues = map([true, false], (_, __, arr) => head(arr));
    expect(trues).toEqual([true, true]);
  });

  it('returns an empty array if passed an empty array', () => {
    expect(map([], () => {})).toEqual([]);
  });
});
