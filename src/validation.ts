export interface Schema {
  [k: string]: 'number' | 'string' | 'boolean';
}

export interface Validator {
  (o: { [k: string]: any }): boolean;
}

export function getValidator(schema: Schema): Validator {
  return function validate(obj) {
    return Object.keys(obj)
      .map(key => [obj[key], schema[key]])
      .every(([val, type]) => typeof val === type);
  };
}
