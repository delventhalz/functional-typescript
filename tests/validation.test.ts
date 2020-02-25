import { getValidator } from '../src/validation';

describe('getValidator', () => {
  it('creates a validator function', () => {
    expect(typeof getValidator({})).toEqual('function');
  });

  it('validates a schema', () => {
    const validate = getValidator({ foo: 'number', bar: 'string' });

    expect(validate({ foo: 7, bar: 'baz' })).toEqual(true);
    expect(validate({ foo: 7, bar: 'baz', qux: undefined })).toEqual(false);
  });

  it('allows missing properties', () => {
    const validate = getValidator({ foo: 'number', bar: 'string' });
    expect(validate({ foo: 7 })).toEqual(true);
  });

  it('always passes an empty object', () => {
    const validate = getValidator({ qux: 'boolean' });
    expect(validate({})).toEqual(true);
  });
});
