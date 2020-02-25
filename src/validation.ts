interface Schema {
  [k: string]: 'number' | 'string' | 'boolean';
}

interface Validator {
  (o: { [k: string]: any }): boolean;
}

function getValidator(schema: Schema): Validator {
  return function validate(obj) {
    return Object.keys(obj)
      .map(key => [obj[key], schema[key]])
      .every(([val, type]) => typeof val === type);
  };
}
